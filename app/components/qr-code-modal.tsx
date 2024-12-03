"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogTitle className="text-lg font-semibold text-center">扫码关注公众号</DialogTitle>
        <div className="text-center space-y-4">
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/wechat_official_qr.png"
              alt="微信公众号二维码"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            关注公众号，获取最新活动信息
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
