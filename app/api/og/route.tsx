import { ImageResponse } from '@vercel/og';
import { members } from '@/lib/data';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // 默认返回
    if (!id) {
      return new ImageResponse(
        (
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f3f4f6',
              fontFamily: 'sans-serif',
            }}
          >
            <span style={{ fontSize: '60px', color: '#1f2937' }}>圣诞快乐 🎄</span>
          </div>
        ),
        {
          width: 1200,
          height: 630,
        }
      );
    }

    // 确保 id 是字符串类型
    const member = members.find(m => m.idx === String(id));
    
    // 找不到用户
    if (!member) {
      console.log('Member not found for id:', id);
      return new ImageResponse(
        (
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f3f4f6',
              fontFamily: 'sans-serif',
            }}
          >
            <span style={{ fontSize: '60px', color: '#1f2937' }}>找不到这个圣诞卡片 🎄</span>
          </div>
        ),
        {
          width: 1200,
          height: 630,
        }
      );
    }

    console.log('Generating OG image for member:', member.name);

    // 用户卡片
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            backgroundColor: '#f3f4f6',
            fontFamily: 'sans-serif',
            padding: '40px',
          }}
        >
          <span style={{ fontSize: '60px', color: '#1f2937', fontWeight: 'bold' }}>
            {member.name}的圣诞卡片
          </span>
          {member.intro && (
            <span style={{ fontSize: '32px', color: '#4b5563', maxWidth: '800px', textAlign: 'center' }}>
              {member.intro.length > 100 ? member.intro.slice(0, 100) + '...' : member.intro}
            </span>
          )}
          <span style={{ fontSize: '40px' }}>🎄</span>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error('OG Image generation error:', e);
    
    // 返回一个基础的错误图片
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f4f6',
            fontFamily: 'sans-serif',
          }}
        >
          <span style={{ fontSize: '32px', color: '#ef4444' }}>图片生成出错了 😢</span>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
}
