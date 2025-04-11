@echo off
echo Limpando node_modules e o package-lock.json...

rd /s /q node_modules
del package-lock.json

echo Instalando dependências novamente...
npm install

echo Tudo pronto! Agora é só rodar: npm run dev
pause
