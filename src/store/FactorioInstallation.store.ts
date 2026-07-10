import { FactorioInstallation } from '#types/FactorioInstallation';
import { create } from 'zustand';

interface FactorioInstallationStore {
    installation?: FactorioInstallation;

    setInstallation: (installation: FactorioInstallation) => void;
    clearInstallation: () => void;
}

export const useFactorioInstallationStore = create<FactorioInstallationStore>((set) => ({
    //installation: factorioInstallationMock,

    setInstallation: (installation) => set({ installation }),
    clearInstallation: () => set({ installation: undefined })
}));
