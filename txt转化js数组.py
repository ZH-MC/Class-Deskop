#将名字转换为js数组
t = 'C:/Users/Administrator/Desktop/names.txt'#文件地址
f=open(encoding='utf-8')
line = f.readline().strip() #读取第一行
txt=[]
txt.append(line)
while line:  # 直到读取完文件
   line = f.readline().strip()  # 读取一行文件，包括换行符
   txt.append(line)
f.close()  # 关闭文件
print(txt)#输出js数组
