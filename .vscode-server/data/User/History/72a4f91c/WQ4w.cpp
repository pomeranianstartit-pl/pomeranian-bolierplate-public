#include "BST.h"
#include <iostream>
#include <fstream>
#include <string>


int main()
{
	AiSD::BST list;

	list.CreateFromFile("./data2.txt");

	//list.Display(list.firstNode, "data2TreeNames", true);

	std::cout << list.Min()->key << std::endl;
	std::cout << list.Max()->key << std::endl;

	std::vector<key_t> keys = list.DisplayKeys();
	for (size_t i = 0; i < keys.size(); i++)
	{
		std::cout << keys[i] << std::endl;
	}

	AiSD::BSTNode* sub_root = list.Search(10);
	std::cout << list.countNodes(sub_root) << std::endl;

	return 0;
}