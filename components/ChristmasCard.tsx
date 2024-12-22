'use client';

import { Member } from '@/lib/data';
import Image from 'next/image';

interface ChristmasCardProps {
  member: Member;
}

export default function ChristmasCard({ member }: ChristmasCardProps) {
  // 根据背景图的类型决定主题色和显示文字
  const getThemeInfo = () => {
    if (member.bgImage.includes('blue')) return { color: 'bg-blue-500', textColor: 'text-blue-500' };
    if (member.bgImage.includes('yellow')) return { color: 'bg-yellow-500', textColor: 'text-yellow-500' };
    if (member.bgImage.includes('purple')) return { color: 'bg-purple-500', textColor: 'text-purple-500' };
    if (member.bgImage.includes('green')) return { color: 'bg-green-500', textColor: 'text-green-500' };
    return { color: 'bg-blue-500', textColor: 'text-blue-500' };
  };

  const { color: themeColor, textColor: themeTextColor } = getThemeInfo();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="relative w-full max-w-md">
        {/* Theme Text */}
        <div className="absolute -top-12 left-4">
          <div className={`text-4xl font-bold ${themeTextColor}`}>
            {themeTextColor.includes('blue') ? '蓝人' :
             themeTextColor.includes('yellow') ? '黄人' :
             themeTextColor.includes('purple') ? '紫人' :
             themeTextColor.includes('green') ? '绿人' : '蓝人'}
          </div>
        </div>

        <div className="rounded-xl shadow-2xl overflow-hidden">
          {/* Background Image Container */}
          <div className="relative h-[600px]">
            {/* Background Image */}
            <Image
              src={member.bgImage}
              alt="background"
              fill
              className="object-cover"
            />
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex items-center justify-center">
              {/* Middle Card */}
              <div className="w-[90%] rounded-xl overflow-hidden shadow-lg">
                {/* Card Container */}
                <div className="grid grid-cols-2">
                  {/* Left Side */}
                  <div className="bg-white p-4 relative min-h-[120px] flex flex-col items-center justify-center gap-4">
                    {/* Name */}
                    <div className="flex items-center space-x-1">
                      {member.name.split('').map((char, index) => (
                        <span key={index} className="text-xl font-bold text-gray-800">
                          {char}
                        </span>
                      ))}
                    </div>

                    {/* Avatar */}
                    <div className="w-24 h-24 rounded-lg overflow-hidden border-4 border-white bg-white shadow-lg">
                      {member.avatar ? (
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xl text-gray-500">{member.name[0]}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Side - Theme Color Background */}
                  <div className={`${themeColor} p-4 min-h-[120px] flex flex-col items-center justify-center gap-3`}>
                    <div className="flex flex-col items-center gap-2">
                      {member.mbti && (
                        <div className="text-white text-lg font-bold">
                          {member.mbti}
                        </div>
                      )}
                      {member.zodiac && (
                        <div className="text-white text-lg font-bold">
                          {member.zodiac}
                        </div>
                      )}
                    </div>
                    {member.hobbies && (
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.hobbies.map((hobby, index) => (
                          <span
                            key={index}
                            className="text-white text-sm bg-white/40 rounded-full px-3 py-1 font-medium"
                          >
                            {hobby}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Section - 自我介绍 */}
              {member.intro && (
                <div className="absolute bottom-12 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-gray-800 shadow-lg">
                    <p className="text-lg leading-relaxed">{member.intro}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
