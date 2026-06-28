import React from "react";
import styles from "./about.module.scss";

export type TabId = string;

type TabButtonProps = {
  tab: { id: TabId; label: string };
  activeTab: TabId;
  onClick: (tabId: TabId) => void;
};

type TabPanelProps = {
  id: TabId;
  activeTab: TabId;
  children: React.ReactNode;
};

export const TabButton = ({ tab, activeTab, onClick }: TabButtonProps) => (
  <button
    type="button"
    className={`${styles.tabLinks} ${activeTab === tab.id ? styles.active : ""}`}
    onClick={() => onClick(tab.id)}
    aria-pressed={activeTab === tab.id}
  >
    {tab.label}
  </button>
);

export const TabPanel = ({ id, activeTab, children }: TabPanelProps) => (
  <div className={`${styles.tabContents} ${activeTab === id ? styles.activeTab : ""}`} id={id}>
    {children}
  </div>
);
