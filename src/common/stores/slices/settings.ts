/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2021. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  colors: {
    primary: string;
    secondary?: string;
  };
  darkMode: boolean;
}

const initialState: SettingsState = {
  colors: {
    primary: '#117DC0',
  },
  darkMode: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updatePrimaryColor: (state, action: PayloadAction<{ color: string }>) => {
      state.colors.primary = action.payload.color;
    },
    setDarkMode: (state, action: PayloadAction<{ status: boolean }>) => {
      state.darkMode = action.payload.status;
    },
  },
});

export const { updatePrimaryColor, setDarkMode } = settingsSlice.actions;
