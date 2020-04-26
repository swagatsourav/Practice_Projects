value = {
    'key1': 'id1',
    'Key2': 'id2',
    'key3': {'in1key1': 'id4', 'in1key2': 'id5', 'in1key3':
             {'in2key1': 'id6', 'in2key2': 'id7', 'in3key3': 'id8'}},
    'key4': 'id9',
    'key5': 'id10'
}
prep_string = ''


def createLebel(arg, level=0):
    global prep_string
    prep_string += "  <ul>\n"
    for i in arg.keys():
        if isinstance(arg[i], dict):
            prep_string += "    <li>\n"
            prep_string += f"      {i}\n"
            createLebel(arg[i])
            prep_string += "    </li>\n"
        else:
            prep_string += f'    <li class="items" id="{arg[i]}">\n'
            prep_string += f"      {i}\n"
            prep_string += "    </li>\n"


createLebel(value)
print(prep_string)

# This formed html is used in C:\Users\Swagat\Desktop\Web Development\Practice_Projects\test1.html
