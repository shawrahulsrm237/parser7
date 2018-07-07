Parser 7 :
------------

Usage : 
----------
Parse 7-segment invoice numbers, and outputs a list with the parsed invoice numbers.


Numbers representation in 7 Segment Display
-------------------------------------------
n = [a,b,c,d,e,f,g]
-------------------------------------------

0 = [1,1,1,1,1,1,0],
1 = [0,1,1,0,0,0,0],
2 = [1,1,0,1,1,0,1],
3 = [1,1,1,1,0,0,1],
4 = [0,1,1,0,0,1,1],
5 = [1,0,1,1,0,1,1],
6 = [1,0,1,1,1,1,1],
7 = [1,1,1,0,0,0,0],
8 = [1,1,1,1,1,1,1],
9 = [1,1,1,1,0,1,1]

How to Run :
------------------
1. Copy Folder to htdocs 
2. cd <folder_name>
3. npm install
4. node server.js
5. Chrome : http://localhost/<folder_name>/
