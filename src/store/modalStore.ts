import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type ModalState = {
  isOpenModal: boolean;
  payload?: any;
  payloadLength?: number;
  activeModal: string | null;
};

type ModalActions = {
  setIsOpenModal: (isOpenModal: boolean, id?: string) => void;
  setPayload: (payload: any, length?: number) => void;
  setModal: (args: ModalState) => void;
  reset: () => void;
};

const initialState: ModalState = {
  isOpenModal: false,
  activeModal: null,
  payload: null,
};

export const useModalStore = create<ModalState & ModalActions>()(
  immer(set => ({
    ...initialState,
    setIsOpenModal: (isOpenModal, id) => set({ isOpenModal, activeModal: id ?? null }),
    setPayload: (payload, length = 1) => set({ payload, payloadLength: length }),
    setModal: args => set({ ...args }),
    reset: () => set(initialState),
  })),
);
