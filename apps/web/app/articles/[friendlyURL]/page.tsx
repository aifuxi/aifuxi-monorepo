"use client";

import { BytemdViewer } from "@/components/client/bytemd";
import { IconChevronDown } from "@/components/client/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ARTICLE_CONTENT_ID = "article-content";

const content =
  "### Docker 启动\n\n```shell\n$ docker run -it --dns 8.8.8.8 --name debian-setup debian:11.7 /bin/bash\n```\n\n### 配置阿里源\n\n```shell\n# 1. 先备份文件，如果出错了还可以还原\n$ cp /etc/apt/sources.list /etc/apt/sources.list.bak\n\n# 2. sed 替换文件内容\n$ sed -i -E 's/(deb|security).debian.org/mirrors.aliyun.com/g' /etc/apt/sources.list\n\n# 3. 更新缓存\n$ apt update\n```\n\n### 安装常用包\n\n```shell\n# procps 是用来安装 ps 命令的\n$ apt install -y vim git zsh wget curl tree which procps nginx\n```\n\n### 配置 shell 环境\n\n我们的电脑先安装字体，[FiraCode Nerd Font](https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/FiraCode.zip)，用来显示特殊字体用的。在终端软件设置字体为刚刚下载安装的 FiraCode Nerd Font\n\n```shell\n# 1. 安装 starship\n$ curl -sS https://starship.rs/install.sh | sh\n\n# 2. 切换默认 shell 为 zsh\n$ chsh -s $(which zsh)\n\n# 3. 把 starship 启动脚本加入到 zshrc\n$ echo 'eval \"$(starship init zsh)\"' >> ~/.zshrc\n\n# 4. 安装 zsh 的插件，并加到 zshrc 中\n$ git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions\n$ git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.zsh/zsh-syntax-highlighting\n$ echo \"source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh\" >> ~/.zshrc\n$ echo \"source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh\" >> ~/.zshrc\n\n# 5. 重新打开终端、或者重启 zsh 才能生效\n```\n\n### 安装 Go 和 nvm\n\n```shell\n# nvm\n# 下载 nvm\n$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash\n\n# 把 nvm 相关的配置加到 zshrc\n$ echo 'export NVM_DIR=\"$HOME/.nvm\"' >> ~/.zshrc\n$ echo '[ -s \"$NVM_DIR/nvm.sh\" ] && \\. \"$NVM_DIR/nvm.sh\"' >> ~/.zshrc\n$ echo 'export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/' >> ~/.zshrc\n# 应用配置\n$ source ~/.zshrc\n\n# 安装 node v18.17.0 并设置为默认\n$ nvm alias default v18.17.0\n$ nvm install v18.17.0\n\n# npm 设置淘宝源\n$ npm config set registry=https://registry.npmmirror.com\n\n\n# Go\n$ wget https://go.dev/dl/go1.20.7.linux-amd64.tar.gz\n$ tar -C /usr/local -xzf go1.20.7.linux-amd64.tar.gz\n$ echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.zshrc\n# 应用配置\n$ source ~/.zshrc\n\n# 开启go module\n$ go env -w GO111MODULE=on\n\n# 使用阿里云的代理\n$ go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct\n```\n";

const ArticleDetailPage = ({ params }: { params: { friendlyURL: string } }) => {
  const friendlyURL = params.friendlyURL;
  const pathname = usePathname();
  return (
    <div>
      <div className="pt-32 flex justify-center">
        <div className="w-[960px] grid gap-12">
          <div className="flex items-center space-x-4 mb-2">
            <div className="flex flex-col">
              <div className="w-[128px] h-0.5 bg-black"></div>
              <div className="w-[64px] h-2 bg-black cyberpunk-divider-clip"></div>
            </div>
            <span className="text-lg">2022年4月21日</span>
          </div>
          <h2 className="text-5xl font-semibold">
            A modern approach to styling in React A modern approach to styling
            in React
          </h2>
          <div className="flex justify-between items-center h-16">
            <Link href={`${pathname}#${ARTICLE_CONTENT_ID}`} className="">
              <IconChevronDown className="w-12 h-12 text-black/20" />
            </Link>
            <div className="flex items-center space-x-6">
              <div className="w-[42px] h-0.5 bg-black/40"></div>
              <div className="text-black/60">00:04:36:30</div>
            </div>
          </div>
        </div>
      </div>
      <div id={ARTICLE_CONTENT_ID} className="w-[960px] mx-auto py-36">
        <BytemdViewer content={content} />
      </div>
    </div>
  );
};

export default ArticleDetailPage;
