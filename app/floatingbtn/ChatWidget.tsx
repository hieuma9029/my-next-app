"use client";

import React, { useState, useEffect, useRef } from 'react';
import '@ant-design/v5-patch-for-react-19';
import { Button, Input, Typography, List, Image, notification } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faPhone, faVideo, faSmile, faPaperclip, faPaperPlane, faCog, faBellSlash, faBell, faHeadset, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import EmojiPicker from 'emoji-picker-react';
import { FileOutlined } from '@ant-design/icons';
import axios from "axios";
import { FloatingButtons } from "./index";

interface Message {
      from: string;
      text?: string;
      imageUrl?: string;
      videoUrl?: string;
      fileName?: string;
      fileUrl?: string;
      time: string;
}

const ChatWidget: React.FC = () => {
      const [visible, setVisible] = useState(false);
      const [messageText, setMessageText] = useState("");
      const [messages, setMessages] = useState<Message[]>([]);
      const [showEmojiPicker, setShowEmojiPicker] = useState(false);
      const [imagePreview, setImagePreview] = useState<string | null>(null);
      const [videoPreview, setVideoPreview] = useState<string | null>(null);
      const [filePreview, setFilePreview] = useState<string | null>(null);
      const [selectedFile, setSelectedFile] = useState<File | null>(null);
      const [showSettings, setShowSettings] = useState(false);
      const [notificationsEnabled, setNotificationsEnabled] = useState(true);
      const fileInputRef = useRef<HTMLInputElement>(null);
      const chatContentRef = useRef<HTMLDivElement>(null);

      // User information form state
      const [name, setName] = useState('');
      const [phone, setPhone] = useState('');
      const [email, setEmail] = useState('');
      const [isChatVisible, setIsChatVisible] = useState(false);
      const [isRegistered, setIsRegistered] = useState<boolean>(false);
      const [nameError, setNameError] = useState('');
      const [phoneError, setPhoneError] = useState('');
      const [emailError, setEmailError] = useState('');

      useEffect(() => {
            if (chatContentRef.current) {
                  chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
            }
      }, [messages]);

      const formatTime = () => {
            const date = new Date();
            return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
      };

      const handleSend = async () => {
            if (!messageText && !selectedFile) return;

            let newMessage: Message = { from: "Tôi", time: formatTime() };
            if (messageText) newMessage.text = messageText;
            if (imagePreview) newMessage.imageUrl = imagePreview;
            if (videoPreview) newMessage.videoUrl = videoPreview;
            if (filePreview) newMessage.fileUrl = filePreview;
            if (selectedFile) newMessage.fileName = selectedFile.name;

            setMessages((prev) => [...prev, newMessage]);
            setMessageText("");
            setImagePreview(null);
            setVideoPreview(null);
            setFilePreview(null);
            setSelectedFile(null);

            if (selectedFile) {
                  const formData = new FormData();
                  formData.append("file", selectedFile);
                  try {
                        const response = await axios.post("http://localhost:8080/api/chat/upload", formData, {
                              headers: { "Content-Type": "multipart/form-data" },
                        });
                        newMessage.fileUrl = response.data.fileUrl;
                        setMessages((prev) => [...prev.slice(0, -1), newMessage]);
                  } catch (error) {
                        setMessages((prev) => [...prev, { from: "Hệ thống", text: "Lỗi kết nối Server !", time: formatTime() }]);
                  }
            }
      };

      const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (file) {
                  setSelectedFile(file);
                  const reader = new FileReader();
                  if (file.type.startsWith("image/")) {
                        reader.onloadend = () => setImagePreview(reader.result as string);
                        reader.readAsDataURL(file);
                        setVideoPreview(null);
                        setFilePreview(null);
                  } else if (file.type.startsWith("video/")) {
                        reader.onloadend = () => setVideoPreview(reader.result as string);
                        reader.readAsDataURL(file);
                        setImagePreview(null);
                        setFilePreview(null);
                  } else {
                        setFilePreview(URL.createObjectURL(file));
                        setImagePreview(null);
                        setVideoPreview(null);
                  }
            }
      };

      const getFileIcon = (fileName: string) => {
            const fileExtension = fileName.split('.').pop()?.toLowerCase();
            switch (fileExtension) {
                  case 'jpg':
                  case 'jpeg':
                  case 'png':
                  case 'gif':
                        return <FileOutlined />;
                  case 'mp4':
                  case 'avi':
                  case 'mov':
                        return <FileOutlined />;
                  default:
                        return <FileOutlined />;
            }
      };

      // User information form handlers
      const handleOpenChat = () => {
            const phoneRegex = /^[0-9]{10}$/;
            const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

            let valid = true;

            if (!name.trim()) {
                  setNameError('Vui lòng nhập tên!');
                  valid = false;
            } else {
                  setNameError('');
            }

            if (!phoneRegex.test(phone)) {
                  setPhoneError('Số điện thoại phải là số và có 10 chữ số!');
                  valid = false;
            } else {
                  setPhoneError('');
            }

            if (email && !emailRegex.test(email)) {
                  setEmailError('Email phải có định dạng @gmail.com!');
                  valid = false;
            } else {
                  setEmailError('');
            }

            if (valid) {
                  setIsChatVisible(true);
                  setIsRegistered(true);
            }
      };

      const handleCancelRegistration = () => {
            setIsChatVisible(false);
      };

      const handleInputFocus = () => {
            if (!isRegistered) {
                  setIsChatVisible(true);
            }
      };

      const handleSettingsClick = () => {
            setShowSettings(!showSettings);
      };

      const handleToggleNotifications = () => {
            setNotificationsEnabled(!notificationsEnabled);
            console.log(notificationsEnabled ? "Đã tắt thông báo" : "Đã bật thông báo");
            notification.info({
                  message: notificationsEnabled ? "Đã tắt thông báo" : "Đã bật thông báo",
                  description: notificationsEnabled ? 
                        "Đã tắt phát âm thanh thông báo khi có tin nhắn mới và nhân viên tham gia hay rời khỏi phòng" : 
                        "Đã bật phát âm thanh thông báo khi có tin nhắn mới và nhân viên tham gia hay rời khỏi phòng",
                  placement: "topRight"
            });
            setShowSettings(false);
      };

      const handleEndSession = () => {
            setIsRegistered(false);
            setIsChatVisible(false);
            setName('');
            setPhone('');
            setEmail('');
            setNameError('');
            setPhoneError('');
            setEmailError('');
            setShowSettings(false);
            console.log("Kết thúc phiên");
      };

      const handleConfigureDevice = () => {
            setShowSettings(false);
            console.log("Cấu hình thiết bị gọi");
      };

      return (
            <div>
                  {visible && (
                        <div className="chat-container" style={{ zIndex: 1000 }}>
                              <Button
                                    type="text"
                                    icon={<FontAwesomeIcon icon={faTimesCircle} style={{ fontSize: 17 }} />}
                                    onClick={() => setVisible(false)}
                                    style={{ position: "absolute", left: -50, zIndex: 1001,  borderRadius: 12, backgroundColor: "#e8eaed", padding: 17 }}
                              />
                              <Button
                                    type="text"
                                    icon={<FontAwesomeIcon icon={faSquareFacebook} style={{ fontSize: 23, color: "blue" }} />}
                                    onClick={() => window.open("https://www.facebook.com", "_blank")}
                                    style={{ position: "absolute", left: -50, top: 45, zIndex: 1001, borderRadius: 12, backgroundColor: "#e8eaed", padding: 17 }}
                              />
                              <div className="chat-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    DSS Support
                                    <div>
                                          <Button
                                                type="primary"
                                                icon={<FontAwesomeIcon icon={faPhone} />}
                                                style={{ backgroundColor: "#00b1ff", borderRadius: 12, marginRight: 8, width: 35, height: 35 }}
                                          />
                                          <Button
                                                type="primary"
                                                icon={<FontAwesomeIcon icon={faVideo} />}
                                                style={{ backgroundColor: "#56cc6e",  borderRadius: 12, width: 35, height: 35 }}
                                          />
                                    </div>
                              </div>
                              {isRegistered ? (
                                    <div
                                          className="chat-content"
                                          ref={chatContentRef}
                                          style={{ overflowY: "auto", height: 400 }}
                                    >
                                          <List
                                                dataSource={messages}
                                                renderItem={(item, index) => {
                                                      const isFirstMessageByUser = index === 0 || messages[index - 1].from !== item.from;
                                                      return (
                                                            <List.Item style={{ flexDirection: "column", alignItems: item.from === "Tôi" ? "flex-end" : "flex-start", borderBottom: "none", padding: 2 }}>
                                                                  {isFirstMessageByUser && (
                                                                        <Typography.Text type="secondary" style={{ fontSize: 12, textDecoration: "none", color: "black" }}>
                                                                              {item.from}, {item.time}
                                                                        </Typography.Text>
                                                                  )}
                                                                  {item.text && (
                                                                        <div style={{ backgroundColor: "black", color: "white", padding: 8, borderRadius: 16 }}>
                                                                              {item.text}
                                                                        </div>
                                                                  )}
                                                                  {item.imageUrl && (
                                                                        <Image width={100} src={item.imageUrl} style={{ borderRadius: 8, marginTop: 5 }} />
                                                                  )}
                                                                  {item.videoUrl && (
                                                                        <video width={200} controls style={{ borderRadius: 8, marginTop: 5 }}>
                                                                              <source src={item.videoUrl} type="video/mp4" />
                                                                              Your browser does not support the video tag.
                                                                        </video>
                                                                  )}
                                                                  {item.fileUrl && (
                                                                        <a href={item.fileUrl} download={item.fileName} style={{ textDecoration: 'none' }}>
                                                                              <div style={{ backgroundColor: "black", padding: 8, borderRadius: 16, display: 'flex', alignItems: 'center', marginTop: 5 }}>
                                                                                    <div className="file-upload left" >
                                                                                          {getFileIcon(item.fileName!)}
                                                                                    </div>
                                                                                    <div className="file-upload right" >
                                                                                          <div style={{ fontWeight: "bold" }}>{item.fileName!.split('.').pop()?.toUpperCase()}</div>
                                                                                          <div style={{ color: "black" }}>
                                                                                                {item.fileName}
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </a>
                                                                  )}
                                                            </List.Item>
                                                      );
                                                }}
                                          />
                                    </div>
                              ) : (
                                    <div className="chat-overlay text-black">
                                          <div className="user-info-form">
                                                <div className="header">
                                                      <p>Vui lòng cho chúng tôi biết thêm một số thông tin của Quý Khách</p>
                                                </div>
                                                <div style={{ marginBottom: '20px' }}>
                                                      <label style={{ display: 'flex', marginBottom: '5px' }}>Tên đầy đủ</label>
                                                      <Input
                                                            placeholder="Nhập tên đầy đủ"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            style={{ width: '100%' }}
                                                      />
                                                      {nameError && <div className="error-message">{nameError}</div>}
                                                </div>
                                                <div style={{ marginBottom: '20px' }}>
                                                      <label style={{ display: 'flex', marginBottom: '10px' }}>
                                                            Số điện thoại <span style={{ color: 'red' }}>*</span>
                                                      </label>
                                                      <Input
                                                            placeholder="Nhập số điện thoại"
                                                            value={phone}
                                                            onChange={(e) => setPhone(e.target.value)}
                                                            style={{ width: '100%' }}
                                                      />
                                                      {phoneError && <div className="error-message">{phoneError}</div>}
                                                </div>
                                                <div style={{ marginBottom: '20px' }}>
                                                      <label style={{ display: 'flex', marginBottom: '5px' }}>Email</label>
                                                      <Input
                                                            placeholder="Nhập email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            style={{ width: '100%' }}
                                                      />
                                                      {emailError && <div className="error-message">{emailError}</div>}
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
                                                      <Button type="primary" onClick={handleOpenChat}>
                                                            Gửi thông tin
                                                      </Button>
                                                </div>
                                          </div>
                                    </div>
                              )}
                              {isRegistered && (
                                    <div>
                                          <div style={{ textAlign: "center", fontSize: 12, color: "gray", backgroundColor: "#f0f2f5", padding: 10 }}>
                                                Tích hợp miễn phí <span style={{ color: "#1890ff" }}>DSS Support</span> vào website của bạn
                                          </div>
                                          <div className="chat-input" style={{ position: "relative", display: "flex", alignItems: "center" }}>
                                                {showEmojiPicker && (
                                                      <EmojiPicker
                                                            width={350}
                                                            height={500}
                                                            onEmojiClick={(emojiObject) => setMessageText((prev) => prev + emojiObject.emoji)}
                                                            style={{ position: "absolute", bottom: 50, right: 20, zIndex: 1000 }}
                                                      />
                                                )}
                                                <Input
                                                      placeholder="Nhập tin nhắn"
                                                      value={messageText}
                                                      onFocus={handleInputFocus}
                                                      onChange={(e) => setMessageText(e.target.value)}
                                                      onPressEnter={handleSend}
                                                      style={{ flex: 1, marginRight: 8, backgroundColor: "#f0f2f5", border: "none", fontSize: 16 }}
                                                />
                                                <Button
                                                      type="text"
                                                      icon={<FontAwesomeIcon icon={faSmile} style={{ fontSize: 20 }} />}
                                                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                                />
                                                <Button
                                                      type="text"
                                                      icon={<FontAwesomeIcon icon={faPaperclip} style={{ fontSize: 20 }} />}
                                                      onClick={() => fileInputRef.current?.click()}
                                                />
                                                <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />
                                                <Button
                                                      type="text"
                                                      icon={<FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: 20, color: "black" }} />}
                                                      onClick={handleSend}
                                                />
                                          </div>
                                    </div>
                              )}
                              {imagePreview && (
                                    <div className="image-preview">
                                          <Image width={150} src={imagePreview} style={{ borderRadius: 8 }} />
                                    </div>
                              )}
                              {videoPreview && (
                                    <div className="video-preview">
                                          <video width={150} controls style={{ borderRadius: 8 }}>
                                                <source src={videoPreview} type="video/mp4" />
                                                Your browser does not support the video tag.
                                          </video>
                                    </div>
                              )}
                              {filePreview && (
                                    <div className="file-preview" style={{ backgroundColor: "black", color: "white", padding: 8, borderRadius: 16, display: 'flex', alignItems: 'center', marginBottom: 5 }}>
                                          {getFileIcon(selectedFile!.name)}
                                          <div style={{ marginLeft: 8 }}>
                                                <div style={{ fontWeight: "bold" }}>{selectedFile!.name.split('.').pop()?.toUpperCase()}</div>
                                                <div>{selectedFile!.name}</div>
                                          </div>
                                    </div>
                              )}
                              {isRegistered && (
                                    <>
                                          <Button
                                                type="text"
                                                icon={<FontAwesomeIcon icon={faCog} style={{ fontSize: 20 }} />}
                                                style={{ position: "absolute", left: -50, bottom: 0, zIndex: 1001, borderRadius: 12, backgroundColor: "#e8eaed", padding: 17 }}
                                                onClick={handleSettingsClick}
                                          />
                                          {showSettings && (
                                                <div className="settings-menu" style={{ position: "absolute", left: -50, bottom: 60, zIndex: 1002, backgroundColor: "white", padding: 10, borderRadius: 8, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
                                                      <Button type="text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '10px', width: '100%' }} onClick={handleToggleNotifications}>
                                                            <FontAwesomeIcon icon={notificationsEnabled ? faBellSlash : faBell} style={{ marginRight: 8 }} />
                                                            {notificationsEnabled ? "Tắt thông báo" : "Bật thông báo"}
                                                      </Button>
                                                      <Button type="text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '10px', width: '100%' }} onClick={handleConfigureDevice}>
                                                            <FontAwesomeIcon icon={faHeadset} style={{ marginRight: 8 }} />
                                                            Cấu hình thiết bị gọi
                                                      </Button>
                                                      <Button type="text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '10px', width: '100%' }} onClick={handleEndSession}>
                                                            <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: 8 }} />
                                                            Kết thúc phiên
                                                      </Button>
                                                </div>
                                          )}
                                    </>
                              )}
                        </div>
                  )}
                  <FloatingButtons onChatClick={() => setVisible(!visible)} />
            </div>
      );
};

export default ChatWidget;
