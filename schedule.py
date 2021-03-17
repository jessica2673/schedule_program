schedule = []
deleted = 0

try:
	'''
	tasks = int(input("How many tasks would you like to complete today: "))
	for i in range(tasks):
		todo = input("What do you need to do: ")
		schedule.append(todo)
	'''
	while True:
		todo = input("What do you need to do (press enter if that is all): ")
		if todo == "":
			break
		schedule.append(todo)
	
	for i in range(len(schedule)):
		print(schedule[i], " ", end = "")
	print()	

	edit = input("Would you like to make any changes to your schedule? (Enter yes or no): ")
	if edit == "yes" or edit == "y":
		while True:
			edit_task = input("Which task would you like to change (if you would simply like to add/delete a task, press enter): ")

			if (edit_task) != "":
				task_change = input("What would you like to change it to: ")
				for i in range(len(schedule)):
				    if schedule[i]==edit_task:
				        schedule[i]=task_change
				        break

			else:
				break

			for i in range(len(schedule)):
				print(schedule[i], " ", end = "")
			print()

		if edit_task=="":
		    add_task="yes"
		else:
		    add_task = input("Would you like to add or delete a task? ")

		while True:
			if add_task.lower() == "yes" or add_task.lower() == "y":
				task_add = input("What would you like to add (if you only want to delete something, press enter): ")
				if task_add != "":
					task_location = int(input("Which number would you like to do it at: "))
					schedule.insert(task_location-1, task_add)
					for i in range(len(schedule)):
						print(schedule[i], " ", end = "")
					print()
				else:
					break
			else:
				break

		while True:
			task_delete = input("Which task would you like to delete (press enter if you wish not to delete anything): ")
			if task_delete=="":
			    break
			else:
			    schedule.remove(task_delete)
			    for i in range(len(schedule)):
			    	print(schedule[i], " ", end = "")
			    print()

		for i in range(len(schedule)):
			print(schedule[i], " ", end="")
		print()

	print("We hope you manage to finish your tasks! Don't forget:\nOnce started, halfway done!")
except ValueError:
	print("Sorry, that was not what we asked for.")
	pass
	




