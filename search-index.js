var searchIndex = {};
searchIndex['imagefmt'] = {"items":[[0,"","imagefmt","",null,null],[3,"PngCustomChunk","","PNG extension chunk.",null,null],[12,"name","","",0,null],[12,"data","","",0,null],[3,"Image","","Image struct returned from the read functions.",null,null],[12,"w","","",1,null],[12,"h","","",1,null],[12,"fmt","","",1,null],[12,"buf","","",1,null],[3,"Info","","Holds basic info about an image.",null,null],[12,"w","","",2,null],[12,"h","","",2,null],[12,"ct","","",2,null],[4,"ColFmt","","Color format.",null,null],[13,"Auto","","",3,null],[13,"Y","","",3,null],[13,"YA","","",3,null],[13,"RGB","","",3,null],[13,"RGBA","","",3,null],[13,"BGR","","",3,null],[13,"BGRA","","",3,null],[4,"ColType","","Color type – these are categories of color formats.",null,null],[13,"Auto","","",4,null],[13,"Gray","","",4,null],[13,"GrayAlpha","","",4,null],[13,"Color","","",4,null],[13,"ColorAlpha","","",4,null],[5,"read_png","","Reads an image and converts it to requested format.",null,{"inputs":[{"name":"r"},{"name":"colfmt"}],"output":{"name":"result"}}],[5,"read_png_info","","Returns width, height and color type of the image.",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[5,"read_png_chunks","","Like `read_png` but also returns the requested extension chunks.",null,null],[5,"write_png","","Writes an image and converts it to requested color type.",null,null],[5,"write_png_chunks","","Like `write_png` but also writes the given extension chunks.",null,null],[5,"read_tga","","Reads an image and converts it to requested format.",null,{"inputs":[{"name":"r"},{"name":"colfmt"}],"output":{"name":"result"}}],[5,"read_tga_info","","Returns width, height and color type of the image.",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[5,"write_tga","","Writes an image and converts it to requested color type.",null,null],[5,"read_bmp","","Reads an image and converts it to requested format.",null,{"inputs":[{"name":"r"},{"name":"colfmt"}],"output":{"name":"result"}}],[5,"read_bmp_info","","Returns width, height and color type of the image.",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[5,"read_jpeg","","Reads an image and converts it to requested format.",null,{"inputs":[{"name":"r"},{"name":"colfmt"}],"output":{"name":"result"}}],[5,"read_jpeg_info","","Returns width, height and color type of the image.",null,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[5,"read_info","","Returns width, height and color type of the image.",null,{"inputs":[{"name":"p"}],"output":{"name":"result"}}],[5,"read","","Reads an image and converts it to requested format.",null,{"inputs":[{"name":"p"},{"name":"colfmt"}],"output":{"name":"result"}}],[5,"write","","Writes an image and converts it to requested color type.",null,null],[5,"convert","","Converts the image into a new allocation.",null,null],[11,"clone","","",1,{"inputs":[{"name":"image"}],"output":{"name":"image"}}],[11,"eq","","",2,{"inputs":[{"name":"info"},{"name":"info"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"info"},{"name":"info"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"info"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"info"}],"output":{"name":"info"}}],[11,"eq","","",3,{"inputs":[{"name":"colfmt"},{"name":"colfmt"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"colfmt"},{"name":"colfmt"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"colfmt"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"colfmt"}],"output":{"name":"colfmt"}}],[11,"eq","","",4,{"inputs":[{"name":"coltype"},{"name":"coltype"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"coltype"},{"name":"coltype"}],"output":{"name":"bool"}}],[11,"fmt","","",4,{"inputs":[{"name":"coltype"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"coltype"}],"output":{"name":"coltype"}}],[11,"write","","Writes an image and converts it to requested color type.",1,{"inputs":[{"name":"image"},{"name":"p"},{"name":"coltype"}],"output":{"name":"result"}}],[11,"convert","","Converts the image into a new allocation.",1,{"inputs":[{"name":"image"},{"name":"colfmt"}],"output":{"name":"result"}}],[11,"color_type","","Returns the color type of the color format.",3,{"inputs":[{"name":"colfmt"}],"output":{"name":"coltype"}}],[11,"fmt","","",1,{"inputs":[{"name":"image"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[3,"PngCustomChunk"],[3,"Image"],[3,"Info"],[4,"ColFmt"],[4,"ColType"]]};
initSearch(searchIndex);
