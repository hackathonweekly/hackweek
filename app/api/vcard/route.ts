import { members } from '@/lib/data';
import { NextRequest, NextResponse } from 'next/server';
import type { QRCodeToDataURLOptions } from 'qrcode';
import QRCode from 'qrcode';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    // 检查是否是 iOS Safari
    const userAgent = request.headers.get('user-agent') || '';
    const isIOSSafari = /iPhone|iPad|iPod/i.test(userAgent) && /Safari/i.test(userAgent) && !/Chrome/i.test(userAgent);

    if (!id) {
      return new NextResponse('ID is required', { status: 400 });
    }

    const member = members.find(m => m.idx === id);
    if (!member) {
      return new NextResponse('Member not found', { status: 404 });
    }

    // 生成 vCard 内容
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'CHARSET:UTF-8',
      `N:${member.name};;;`,
      `FN:${member.name}`,
      member.phone && member.phone !== 'none' ? `TEL;TYPE=CELL:${member.phone}` : '',
      member.intro ? `NOTE;CHARSET=UTF-8:${member.intro}` : '',
      'END:VCARD'
    ].filter(Boolean).join('\r\n');

    // 设置响应头
    const headers = new Headers();
    
    if (!isIOSSafari) {
      // 生成二维码
      const qrCodeOptions: QRCodeToDataURLOptions = {
        type: 'image/png',
        margin: 2,
        width: 300,
        color: {
          dark: '#000',
          light: '#FFF'
        }
      };

      const qrCodeDataUrl = await QRCode.toDataURL(vcard, qrCodeOptions);

      // 显示二维码页面
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>保存联系人 - ${member.name}</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              margin: 0;
              padding: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              background-color: #f3f4f6;
              color: #1f2937;
            }
            .card {
              background: white;
              padding: 24px;
              border-radius: 16px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              max-width: 320px;
              width: 100%;
              text-align: center;
            }
            .name {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 8px;
            }
            .phone {
              font-size: 18px;
              color: #4b5563;
              margin-bottom: 16px;
              display: ${member.phone && member.phone !== 'none' ? 'block' : 'none'};
            }
            .qrcode {
              margin: 20px 0;
            }
            .qrcode img {
              max-width: 100%;
              height: auto;
            }
            .instructions {
              font-size: 14px;
              color: #6b7280;
              margin-top: 16px;
              line-height: 1.5;
            }
            .intro {
              font-size: 16px;
              color: #4b5563;
              margin: 12px 0;
              line-height: 1.5;
            }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="name">${member.name}</div>
            ${member.phone && member.phone !== 'none' ? `<div class="phone">${member.phone}</div>` : ''}
            ${member.intro ? `<div class="intro">${member.intro}</div>` : ''}
            <div class="qrcode">
              <img src="${qrCodeDataUrl}" alt="联系人二维码">
            </div>
            <div class="instructions">
              <p>使用手机相机扫描二维码，即可保存联系人信息</p>
              <p>iPhone 用户可直接使用相机扫描</p>
              <p>安卓用户可使用系统相机或其他扫码工具</p>
            </div>
          </div>
        </body>
        </html>
      `;
      
      headers.set('Content-Type', 'text/html; charset=utf-8');
      return new NextResponse(htmlContent, { headers });
    } else {
      // 在 iOS Safari 中，直接返回 vCard
      headers.set('Content-Type', 'text/vcard');
      headers.set('Content-Disposition', 'inline');
      return new NextResponse(vcard, { headers });
    }
  } catch (error) {
    console.error('vCard generation error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
