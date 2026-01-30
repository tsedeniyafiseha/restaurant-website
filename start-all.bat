@echo off
echo Starting Mesob Restaurant - All Services...
echo.

echo Starting Backend Server (Port 3001)...
start "Backend Server" cmd /k "cd backend && npm start"

timeout /t 2 /nobreak > nul

echo Starting Frontend Website (Port 3000)...
start "Frontend Website" cmd /k "cd frontend && npm start"

timeout /t 2 /nobreak > nul

echo Starting Admin Panel (Port 3002)...
start "Admin Panel" cmd /k "cd admin && npm start"

echo.
echo All services are starting...
echo.
echo Backend API: http://localhost:3001
echo Main Website: http://localhost:3000
echo Admin Panel: http://localhost:3002
echo.
echo Default Admin Password: admin123
echo.
pause
