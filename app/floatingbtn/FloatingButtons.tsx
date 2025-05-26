import React from "react";
import { Tooltip, Button } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

const FloatingButtons: React.FC<{ onChatClick: () => void }> = ({ onChatClick }) => (
      <div style={{ position: "fixed", bottom: 20, right: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <Tooltip title="Nhấn để Chat hoặc Gọi">
                  <Button
                        shape="circle"
                        icon={<PhoneOutlined style={{ fontSize: 30 }} />}
                        size="large"
                        style={{ backgroundColor: "#122b45", color: "white", padding: 25 }}
                        onClick={onChatClick}
                  />
            </Tooltip>
      </div>
);

export default FloatingButtons;
