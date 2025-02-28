"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { DownloadIcon, ImageIcon, Loader2Icon, PlusIcon, Trash2Icon, UploadIcon } from "lucide-react";
import * as domtoimage from 'dom-to-image';

export default function TrafficGuidePage() {
  const { toast } = useToast();
  const printRef = useRef<HTMLDivElement>(null);

  // 状态管理
  const [address, setAddress] = useState("");
  const [addressImage, setAddressImage] = useState<string | null>(null);

  const [directions, setDirections] = useState("");
  const [directionImages, setDirectionImages] = useState<string[]>([]);

  const [venueInfo, setVenueInfo] = useState("");
  const [venueImage, setVenueImage] = useState<string | null>(null);

  const [qrCodeImage, setQrCodeImage] = useState<string | null>(null);

  const [isDownloading, setIsDownloading] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [imageQuality, setImageQuality] = useState<"normal" | "high">("high");
  const [imageFormat, setImageFormat] = useState<"png" | "jpeg">("png");
  const [imageObjectFit, setImageObjectFit] = useState<"contain" | "cover" | "fill" | "scale-down">("cover");


  // 图片上传处理函数
  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "address" | "direction" | "venue" | "qrCode"
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;

      switch (type) {
        case "address":
          setAddressImage(result);
          break;
        case "direction":
          setDirectionImages([...directionImages, result]);
          break;
        case "venue":
          setVenueImage(result);
          break;
        case "qrCode":
          setQrCodeImage(result);
          break;
      }
    };
    reader.readAsDataURL(file);
  };

  // 处理拖拽上传
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent, type: "address" | "direction" | "venue" | "qrCode") => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    if (!file.type.startsWith('image/')) {
      toast({
        title: "上传失败",
        description: "请上传图片文件",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;

      switch (type) {
        case "address":
          setAddressImage(result);
          break;
        case "direction":
          setDirectionImages([...directionImages, result]);
          break;
        case "venue":
          setVenueImage(result);
          break;
        case "qrCode":
          setQrCodeImage(result);
          break;
      }

      toast({
        title: "上传成功",
        description: "图片已成功上传",
      });
    };
    reader.readAsDataURL(file);
  };

  // 多图片上传处理函数
  const handleMultiImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newImages: string[] = [];

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        newImages.push(result);

        // 当所有图片都已读取完成时，更新状态
        if (newImages.length === files.length) {
          setDirectionImages([...directionImages, ...newImages]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // 删除图片
  const removeImage = (index: number) => {
    setDirectionImages(directionImages.filter((_, i) => i !== index));
  };

  // 下载为图片
  const handleDownload = useCallback(async () => {
    if (!printRef.current) return;

    setIsDownloading(true);

    try {
      // 保存原始样式
      const container = printRef.current;
      const originalStyle = container.style.cssText;
      const originalClass = container.className;

      // 临时修改样式以确保所有内容都可见
      container.style.maxHeight = 'none';
      container.style.overflow = 'visible';
      container.style.height = 'auto';
      container.style.padding = '0';
      container.style.margin = '0';
      container.className = container.className.replace('overflow-y-auto', '');

      // 确保所有图片都已加载完成
      const images = container.querySelectorAll('img');
      await Promise.all(Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = img.onerror = resolve;
        });
      }));

      // 计算实际内容的尺寸
      const contentElements = container.querySelectorAll('.space-y-4, .space-y-8, .flex');
      let maxWidth = 0;
      let totalHeight = 0;

      contentElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        maxWidth = Math.max(maxWidth, rect.width);
        totalHeight += rect.height;
      });

      // 根据选择的格式生成图片
      let dataUrl;
      const options = {
        quality: imageQuality === "high" ? 1 : 0.5,
        bgcolor: '#ffffff',
        height: container.scrollHeight,
        width: container.scrollWidth,
        style: {
          'border-radius': '0',
          'box-shadow': 'none',
          'overflow': 'hidden',
          'padding': '0',
          'margin': '0'
        },
        filter: (node) => {
          // 确保所有图片都被包含
          return true;
        }
      };

      if (imageFormat === 'png') {
        dataUrl = await domtoimage.toPng(container, options);
      } else {
        dataUrl = await domtoimage.toJpeg(container, options);
      }

      // 恢复原始样式
      container.style.cssText = originalStyle;
      container.className = originalClass;

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `交通指引.${imageFormat}`;
      link.click();

      toast({
        title: "下载成功",
        description: "交通指引已成功保存",
      });
    } catch (error) {
      console.error('下载失败:', error);
      toast({
        title: "下载失败",
        description: "请重试或联系管理员",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  }, [printRef, toast, imageQuality, imageFormat, imageObjectFit ]);

  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      {/* 打印样式 */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #print-content,
          #print-content * {
            visibility: visible;
          }
          #print-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>

      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <motion.h1
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                交通指引生成器
              </span>
            </motion.h1>
            <motion.p
              className="text-base md:text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              创建自定义的交通指引，帮助访客轻松找到您的位置
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 编辑区域 */}
            <div className="space-y-6">
              <Tabs defaultValue="location" className="w-full">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="location">我们在哪</TabsTrigger>
                  <TabsTrigger value="directions">交通指引</TabsTrigger>
                  <TabsTrigger value="venue">场地信息</TabsTrigger>
                  <TabsTrigger value="qrcode">公众号</TabsTrigger>
                </TabsList>

                {/* 我们在哪 */}
                <TabsContent value="location" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>我们在哪</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">具体地址</label>
                        <Input
                          placeholder="输入详细地址"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">地点照片（可选）</label>
                        <div className="flex items-center gap-4">
                          <Button
                            variant="outline"
                            onClick={() => document.getElementById("addressImage")?.click()}
                            className="flex items-center gap-2"
                          >
                            <UploadIcon className="h-4 w-4" />
                            上传照片
                          </Button>
                          <input
                            type="file"
                            id="addressImage"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e, "address")}
                          />
                        </div>

                        {addressImage && (
                          <div className="relative bg-gray-50 rounded-md p-2 flex items-center justify-center">
                            <img
                              src={addressImage}
                              alt="地址图片"
                              className={`w-full rounded-md object-${imageObjectFit === 'contain' ? 'cover' : imageObjectFit}`}
                              style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}
                              crossOrigin="anonymous"
                            />
                            <Button
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2"
                              onClick={() => setAddressImage(null)}
                            >
                              <Trash2Icon className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                        <div
                          className="mt-4 border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDrop(e, "address")}
                        >
                          <p className="text-sm text-gray-500">
                            <UploadIcon className="h-5 w-5 mx-auto mb-1" />
                            或者拖拽图片到这里
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* 交通指引 */}
                <TabsContent value="directions" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>交通指引</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">如何到达</label>
                        <Textarea
                          placeholder="描述如何到达目的地的详细指引..."
                          value={directions}
                          onChange={(e) => setDirections(e.target.value)}
                          rows={5}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">交通照片（可选）</label>
                        <div className="flex items-center gap-4">
                          <Button
                            variant="outline"
                            onClick={() => document.getElementById("directionImages")?.click()}
                            className="flex items-center gap-2"
                          >
                            <UploadIcon className="h-4 w-4" />
                            上传照片
                          </Button>
                          <input
                            type="file"
                            id="directionImages"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={handleMultiImageUpload}
                          />
                        </div>

                        {directionImages.length > 0 && (
                          <div className="mt-4 grid grid-cols-2 gap-4">
                            {directionImages.map((img, index) => (
                              <div key={index} className="relative bg-gray-50 rounded-md p-2 flex items-center justify-center">
                                <img
                                  key={index}
                                  src={img}
                                  alt={`交通图片 ${index + 1}`}
                                  className={`w-full rounded-md object-${imageObjectFit === 'contain' ? 'cover' : imageObjectFit}`}
                                  style={{ display: 'inline-block', maxWidth: '100%' }}
                                  crossOrigin="anonymous"
                                />
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  className="absolute top-2 right-2"
                                  onClick={() => removeImage(index)}
                                >
                                  <Trash2Icon className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                        <div
                          className="mt-4 border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDrop(e, "direction")}
                        >
                          <p className="text-sm text-gray-500">
                            <UploadIcon className="h-5 w-5 mx-auto mb-1" />
                            或者拖拽图片到这里
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* 场地信息 */}
                <TabsContent value="venue" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>场地信息</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">场地详情</label>
                        <Textarea
                          placeholder="描述场地的详细信息..."
                          value={venueInfo}
                          onChange={(e) => setVenueInfo(e.target.value)}
                          rows={5}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">场地照片（可选）</label>
                        <div className="flex items-center gap-4">
                          <Button
                            variant="outline"
                            onClick={() => document.getElementById("venueImage")?.click()}
                            className="flex items-center gap-2"
                          >
                            <UploadIcon className="h-4 w-4" />
                            上传照片
                          </Button>
                          <input
                            type="file"
                            id="venueImage"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e, "venue")}
                          />
                        </div>

                        {venueImage && (
                          <div className="relative bg-gray-50 rounded-md p-2 flex items-center justify-center">
                            <img
                              src={venueImage}
                              alt="场地图片"
                              className={`w-full rounded-md object-${imageObjectFit}`}
                              style={{ display: 'inline-block', maxWidth: '100%' }}
                              crossOrigin="anonymous"
                            />
                            <Button
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2"
                              onClick={() => setVenueImage(null)}
                            >
                              <Trash2Icon className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                        <div
                          className="mt-4 border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDrop(e, "venue")}
                        >
                          <p className="text-sm text-gray-500">
                            <UploadIcon className="h-5 w-5 mx-auto mb-1" />
                            或者拖拽图片到这里
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* 微信公众号 */}
                <TabsContent value="qrcode" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>微信公众号</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">公众号二维码</label>
                        <div className="flex items-center gap-4">
                          <Button
                            variant="outline"
                            onClick={() => document.getElementById("qrCodeImage")?.click()}
                            className="flex items-center gap-2"
                          >
                            <UploadIcon className="h-4 w-4" />
                            上传二维码
                          </Button>
                          <input
                            type="file"
                            id="qrCodeImage"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e, "qrCode")}
                          />
                        </div>

                        {qrCodeImage && (
                          <div className="relative bg-gray-50 rounded-md p-2 flex items-center justify-center">
                            <img
                              src={qrCodeImage}
                              alt="二维码图片"
                              className={`w-full rounded-md object-${imageObjectFit}`}
                              style={{ display: 'inline-block', maxWidth: '100%' }}
                              crossOrigin="anonymous"
                            />
                            <Button
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2"
                              onClick={() => setQrCodeImage(null)}
                            >
                              <Trash2Icon className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                        <div
                          className="mt-4 border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDrop(e, "qrCode")}
                        >
                          <p className="text-sm text-gray-500">
                            <UploadIcon className="h-5 w-5 mx-auto mb-1" />
                            或者拖拽图片到这里
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white mt-6"
                onClick={handleDownload}
                disabled={isDownloading}
                size="lg"
              >
                {isDownloading ? (
                  <div className="flex items-center gap-2">
                    <Loader2Icon className="animate-spin h-4 w-4" />
                    下载中...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    下载完整交通指引
                  </div>
                )}
              </Button>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-sm font-medium mb-3 text-gray-700">下载选项</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 block mb-1">图片质量</label>
                    <select
                      value={imageQuality}
                      onChange={(e) => setImageQuality(e.target.value as "normal" | "high")}
                      className="w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="normal">普通</option>
                      <option value="high">高质量</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 block mb-1">图片格式</label>
                    <select
                      value={imageFormat}
                      onChange={(e) => setImageFormat(e.target.value as "png" | "jpeg")}
                      className="w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="png">PNG (透明背景)</option>
                      <option value="jpeg">JPEG (更小体积)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 block mb-1">图片嵌入模式</label>
                    <select
                      value={imageObjectFit}
                      onChange={(e) => setImageObjectFit(e.target.value as "contain" | "cover" | "fill" | "scale-down")}
                      className="w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="contain">包含 (保持比例完整显示)</option>
                      <option value="cover">覆盖 (填满容器可能裁剪)</option>
                      <option value="fill">填充 (拉伸填满容器)</option>
                      <option value="scale-down">缩小 (类似包含但更小)</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">调整图片在容器中的显示方式</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 预览区域 */}
            <div className="col-span-1 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-medium">预览</h3>
                <p className="text-sm text-gray-500 mt-1">下方预览将生成为瘦长型图片</p>
                <Button
                  variant="outline"
                  className="mt-2"
                  onClick={() => setShowFullPreview(!showFullPreview)}
                >
                  {showFullPreview ? '显示部分预览' : '显示完整预览'}
                </Button>
              </div>

              <div className="p-4 flex justify-center">
                <div
                  ref={printRef}
                  id="print-content"
                  className={`space-y-8 bg-white overflow-hidden rounded-lg shadow-sm ${showFullPreview ? '' : 'max-h-[600px] overflow-y-auto scrollbar-thin'}`}
                  style={{
                    width: '400px',
                    margin: '0 auto',
                    boxSizing: 'border-box',
                    backgroundColor: '#ffffff',
                    border: '1px solid #f3f4f6',
                    padding: '24px',
                    overflow: 'hidden'
                  }}
                >
                  {/* 标题部分 */}
                  <div className="flex flex-col items-center space-y-4 pb-4 border-b border-gray-200">
                    <img
                      src="/logo-cross.png"
                      alt="HackathonWeekly Logo"
                      className="h-12 w-auto"
                      crossOrigin="anonymous"
                    />
                    <h1 className="text-2xl font-bold text-purple-600">交通指引</h1>
                    <p className="text-center text-gray-500 text-sm">HackathonWeekly 周周黑客松</p>
                  </div>

                  {/* 我们在哪 */}
                  <div className="space-y-4 bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold border-b pb-2 text-purple-700">我们在哪</h2>
                    <p className="text-gray-700 whitespace-pre-line">{address || "请填写地址信息"}</p>
                    {addressImage && (
                      <div className="bg-white p-2 rounded-md shadow-sm text-center">
                        <img
                          src={addressImage}
                          alt="地址图片"
                          className={`rounded-md object-${imageObjectFit === 'contain' ? 'cover' : imageObjectFit}`}
                          style={{ display: 'inline-block', maxWidth: '100%' }}
                          crossOrigin="anonymous"
                        />
                      </div>
                    )}
                  </div>

                  {/* 交通指引 */}
                  <div className="space-y-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold border-b pb-2 text-blue-700">交通指引</h2>
                    {directions ? (
                      <p className="text-gray-700 whitespace-pre-line">{directions}</p>
                    ) : (
                      <p className="text-gray-400 italic">请输入交通指引...</p>
                    )}

                    {directionImages.length > 0 && (
                      <div className="space-y-4">
                        {directionImages.map((img, index) => (
                          <div key={index} className="bg-white p-2 rounded-md shadow-sm text-center">
                            <img
                              key={index}
                              src={img}
                              alt={`交通图片 ${index + 1}`}
                              className={`rounded-md object-${imageObjectFit === 'contain' ? 'cover' : imageObjectFit}`}
                              style={{ display: 'inline-block', maxWidth: '100%' }}
                              crossOrigin="anonymous"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 场地信息 */}
                  <div className="space-y-4 bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold border-b pb-2 text-indigo-700">场地信息</h2>
                    {venueInfo ? (
                      <p className="text-gray-700 whitespace-pre-line">{venueInfo}</p>
                    ) : (
                      <p className="text-gray-400 italic">请输入场地信息...</p>
                    )}

                    {venueImage && (
                      <div className="bg-white p-2 rounded-md shadow-sm text-center">
                        <img
                          src={venueImage}
                          alt="场地图片"
                          className={`rounded-md object-${imageObjectFit}`}
                          style={{ display: 'inline-block', maxWidth: '100%' }}
                          crossOrigin="anonymous"
                        />
                      </div>
                    )}
                  </div>

                  {/* 关注我们 - 用户上传的二维码 */}
                  {qrCodeImage && (
                    <div className="space-y-4 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                      <h2 className="text-xl font-semibold border-b pb-2 text-purple-700">关注我们</h2>
                      <div className="flex justify-center">
                        <div className="bg-white p-2 rounded-md shadow-sm text-center">
                          <img
                            src={qrCodeImage}
                            alt="二维码图片"
                            className={`rounded-md object-${imageObjectFit}`}
                            style={{ display: 'inline-block', maxWidth: '100%' }}
                            crossOrigin="anonymous"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 尾部信息 */}
                  <div className="mt-8 pt-6 border-t border-gray-200 space-y-6">
                    <div className="flex flex-col items-center space-y-4">
                      <h2 className="text-xl font-semibold text-center text-purple-700">周周黑客松</h2>
                      <div className="bg-white p-3 rounded-md shadow-sm text-center">
                        <img
                          src="/wechat_official_qr.png"
                          alt="周周黑客松微信公众号"
                          className={`rounded-md object-${imageObjectFit}`}
                          style={{ display: 'inline-block', maxWidth: '140px', height: 'auto' }}
                          crossOrigin="anonymous"
                        />
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg w-full">
                        <p className="text-sm text-gray-700 text-center px-2">
                          HackathonWeekly周周黑客松是一个AI产品创造者社区，致力于帮助创造者从0到1实现最小可行产品（MVP），并快速找到他们的前100个用户。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
