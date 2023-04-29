import {ThemeContext} from 'src/provider/theme';
import React, {useContext} from 'react';

export const useTheme = () => useContext(ThemeContext);
