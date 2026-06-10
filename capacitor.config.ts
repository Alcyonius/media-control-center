import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'uk.homelab.mcc',
  appName: 'Media Control Center',
  webDir: '.next',
  server: {
    url: 'https://media.homelab-server.uk',
    cleartext: false
  }
};

export default config;
