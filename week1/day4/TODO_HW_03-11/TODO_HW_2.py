ToDoList = []

option = input('''
    Welcome to your TO-DO List!
    ***************************
    (1) Add task
    (2) Delete task
    (3) View tasks
    (Q) Quit
    \n
    Please choose an option to begin.
    ''')


def add():

    title = input('''
    What should I write down?
    ''')
    priority = input('''
    What level priority is the task?
    (1) - High -
    (2) - Medium -
    (3) - Low -
    ''')

    if priority == '1':
        input('''
    "%s"
    I've marked it down! --Must be urgent!!
    ''' % (title))

    elif priority == '2':
        input('''
    "%s"
    I'll put that on the list. Good luck!
    ''' % (title))

    elif priority == '3':
        input('''
    "%s"
    Got it. We'll get to it... Eventually.
    ''' % (title))

    else:
        print('''
    Whoops! Try choosing a number to represent your choice.
    ''')
        return add()

    taskItem = {'title': title, 'priority': priority}
    ToDoList.append(taskItem)

# my add function works! i don't know how to make the program loop back to the choices though.


def delete():
    selection = input('''
    Let's trim this list!
    Which item would you like to remove?
    ''')

    if selection == '1':
        print('i am typing this to be able to save it')


# lost in my delete function because my program ends after you add a task!


def view():
    print("I see you want to view your To Do List... me too.")

# lost in my view function because my program ends after you add a task!


if option == '1':
    add()
elif option == '2':
    delete()
elif option == '3':
    view()
elif option == 'Q':
    print("My battery was running low anyway. See ya!")
else:
    print("INVALID OPTION, M8! Maybe try one of the numbers? ")
