---
title: ComfyUI工作流完全指南
date: 2024-11-04
tags: ['AI', 'ComfyUI', '工作流', 'Stable Diffusion']
category: AI工作流
author: 杰哥
cover: https://picsum.photos/400/400?random=15
---

# ComfyUI工作流完全指南

ComfyUI是强大的AI图像生成工作流工具。

## 什么是ComfyUI

基于节点的Stable Diffusion工作流界面。

## 安装配置

1. 下载ComfyUI
2. 安装Python依赖
3. 下载模型文件
4. 启动程序

## 基础节点

### 加载节点
- Load Checkpoint
- Load VAE
- Load LoRA

### 采样节点
- KSampler
- KSampler Advanced

### 输出节点
- Save Image
- Preview Image

## 工作流案例

### 文生图基础流程
1. 加载模型
2. 输入提示词
3. 采样生成
4. 保存图片

### 图生图流程
1. 加载原图
2. 设置强度
3. 重新采样
4. 输出结果

## 进阶技巧

- 使用ControlNet
- 批量处理
- 自定义节点
