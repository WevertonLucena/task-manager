# TaskApp

Aplicativo de gerenciamento de tarefas desenvolvido com React Native, oferecendo uma interface moderna e intuitiva com suporte a tema escuro.

## 🚀 Funcionalidades

- ✅ Criação e gerenciamento de tarefas
- 🌓 Suporte a tema claro e escuro
- 💾 Persistência de dados local
- ✨ Interface moderna e responsiva

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework principal para desenvolvimento mobile
- **TypeScript**: Linguagem principal, oferecendo tipagem estática
- **@react-navigation**: Navegação entre telas
- **@react-native-async-storage**: Persistência local de dados
- **Context API**: Gerenciamento de estado global

## 🏗️ Arquitetura e Decisões Técnicas

### Estrutura de Pastas
```
src/
  ├── components/     # Componentes reutilizáveis
  ├── context/        # Contextos globais (Theme e Task)
  └── screens/        # Telas do aplicativo
```

### Decisões Técnicas

1. **Context API**: Escolhida para gerenciamento de estado por:
   - Simplicidade na implementação
   - Integração nativa com React
   - Adequada para a escala do projeto

2. **AsyncStorage**: Utilizado para persistência por:
   - Solução nativa do React Native
   - Fácil implementação
   - Adequado para armazenamento de dados simples

3. **Componentes Reutilizáveis**:
   - `CustomButton`: Componente de botão padronizado
   - `TaskItem`: Componente para exibição de tarefas
   - Facilita manutenção e consistência visual

4. **Sistema de Temas**:
   - Implementação própria usando Context
   - Suporte a tema claro e escuro
   - Fácil extensão para novos temas

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- npm ou yarn
- Ambiente React Native configurado ([guia oficial](https://reactnative.dev/docs/environment-setup))

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/WevertonLucena/task-manager
cd TaskApp
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o Metro Bundler:
```bash
npm start
# ou
yarn start
```

4. Execute o aplicativo:

Para Android:
```bash
npm run android
# ou
yarn android
```

Para iOS:
```bash
cd ios && pod install && cd ..
npm run ios
# ou
yarn ios
```
