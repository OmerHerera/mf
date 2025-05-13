import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'mf_provider',
  exposes: {
    // '.': './src/components/ProviderComponent.tsx', // You’re exposing '.' (i.e. the index of the remote).
    './ProviderComponent': './src/components/ProviderComponent.tsx',
    './Button': './src/components/Button.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
