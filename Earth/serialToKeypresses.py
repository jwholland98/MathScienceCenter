import serial, pyautogui

port = serial.Serial("/dev/ttyACM0", baudrate=9600) #,timeout=3.0 

while True:
	input = port.read() #argument is num of lines/chars read?

	
	input = input.decode()
	input = input.strip()
		
	#print('input:\n')
	#print(input)
	#print('\n')
	
	if input == 'A':
		pyautogui.press('a');
		#print('Pressed A!')
	elif input == 'B':
		pyautogui.press('b');
		#print('Pressed B!')
