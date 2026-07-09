import { FactorioInstallation } from '#types/FactorioInstallation';
import { create } from 'zustand';
import { factorioInstallationMock } from '../mock/FactorioInstallationMock';

interface FactorioInstallationStore {
    installation?: FactorioInstallation;

    setInstallation: (installation: FactorioInstallation) => void;
    clearInstallation: () => void;
}

export const useFactorioInstallationStore = create<FactorioInstallationStore>((set) => ({
    installation: factorioInstallationMock,

    setInstallation: (installation) => set({ installation }),
    clearInstallation: () => set({ installation: undefined })
}));