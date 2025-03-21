import { COLORS } from '@/constant/color';

interface ColorDefinition {
  value: string | undefined;
}

interface ColorConfig {
  [key: string | number]: ColorDefinition | undefined;
}

export const customizeColors = (): ColorConfig => {
  const data = Object.entries(COLORS);

  const result: ColorConfig = {};
  if (!data?.length) return result;

  data.forEach(([token, value]) => {
    result[token] = { value };
  });
  return result;
};
