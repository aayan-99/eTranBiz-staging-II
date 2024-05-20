'use client'

import { create } from 'zustand'

interface SidebarStore {
    sidebarOpen: boolean;
    toggleSidebar: () => void;
}

const useSidebarStore = create<SidebarStore>((set) => ({
    sidebarOpen: false,
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
    closeSidebar: () => set({ sidebarOpen: false }),
}));

export default useSidebarStore