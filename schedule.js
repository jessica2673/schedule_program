schedule = [];
deleted = 0;

//try {
	while (true){
		todo = input("What do you need to do (press enter if that is all): ");
		if (todo === ("")){
			break;
		}
		else{
		    schedule.append(todo);
		}
	}
	for (i=0; i<= schedule.length; i++){
		print(schedule[i], " ", end = "");
	print();
	}
	edit = input("Would you like to make any changes to your schedule? (Enter yes or no): ");
	if (edit == "yes"){
		while (true){
			edit_task = input("Which task would you like to change (if you would simply like to add/delete a task, press enter): ");

			if (edit_task !== ""){
				task_change = input("What would you like to change it to: ");
				for (i=0; i<= schedule.length; i++){
				    if (schedule[i]===edit_task){
				        schedule[i]=task_change;
				        break;
				    }
				}
			}
			else{
				break;
			}
			for (i=0; i<= schedule.length; i++){
				print(schedule[i], " ", end = "");
			print();
			}
		}

		if (edit_task===""){
		    add_task="yes";
		}
		else{
		    add_task = input("Would you like to add or delete a task? ");
		}
		while (true){
			if (add_task.lower() === "yes"){
				task_add = input("What would you like to add (if you only want to delete something, press enter): ");
				if (task_add !== ""){
					task_location = int(input("Which number would you like to do it at: "));
					schedule.insert(task_location-1, task_add);
					for (i=0;i <= schedule.length; i++){
						print(schedule[i], " ", end = "");
					print();
					}
				}
				else{
					break;
				}
			}
			else{
				break;
			}
		}
		while (true){
			task_delete = input("Which task would you like to delete (press enter if you wish not to delete anything): ");
			if (task_delete===""){
			    break;
			}
			else{
			    schedule.remove(task_delete);
			    for (i=0; i <= schedule.length; i++){
			    	print(schedule[i], " ", end = "");
			    print();
			    }
			}
		}
		for (i=0; i<= schedule.length; i++){
			print(schedule[i], " ", end="");
		}
		print();
		

    //}
    print("We hope you manage to finish your tasks! Don't forget:\nOnce started, halfway done!");
//}


//catch (TypeError){
	//print("Sorry, that was not what we asked for.");
}
