# Module Federation Example

This project demonstrates **Module Federation**, where two independent applications (`mf_provider` and `mf_consumer_host`) work together in a micro-frontend architecture.

## 📁 Project Structure

```javascript
root/
├── mf_consumer_host/ # Host application (consumer)
├── mf_provider/ # Remote application (provider)
├── package.json
└── ...
```

## 📦 Installation & Setup

- Install dependencies in the all the folders, root and individually in all folders, `mf`, `mf_consumer_host`, `mf_provider`:

```bash
npm install
```

## ▶️ Running the Project

To start both the `provider` and the `consumer/host`, simply run:

```bash
npm run dev
```

This command concurrently starts the dev servers for both `mf_provider` and `mf_consumer_host`.

### 🧩 mf_provider (Remote)

This application exposes two components using Webpack's Module Federation plugin:

`Button`: A simple reusable button component.

`ComponentProvider`: A more complex component that might include internal state, side effects, or other nested components.

#### Exposed Modules

These components are exposed through the `module-federation.config.ts` file:

```javascript
exposes: {
    './ProviderComponent': './src/components/ProviderComponent.tsx',
    './Button': './src/components/Button.tsx',
  },
```

#### 🧲 mf_consumer_host (Host)

This application acts as the host and consumes the remote components exposed by `mf_provider`.

### Usage

Once both applications are running:

The host app dynamically loads the Button and ComponentProvider from the remote.

These components are rendered within the host’s UI, as if they were local.

Example in Host Code

```javascript
const Provider = React.lazy(() => import('provider/ProviderComponent'));
const Button = React.lazy(() => import('provider/Button'));
```
