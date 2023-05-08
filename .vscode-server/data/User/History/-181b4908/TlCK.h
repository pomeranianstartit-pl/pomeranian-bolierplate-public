#pragma once
#include <vector>
#include <string>
#include <fstream>
#include <queue>

using key_t_defined = unsigned short;
namespace AiSD
{
	struct data
	{
		key_t_defined id;
		std::string name;
	};

	class BSTNode
	{
	public:
		data data;
		key_t_defined key;
		BSTNode* parent;
		BSTNode* left;
		BSTNode* right;

		BSTNode()
		{
			data = { 0, "BLANK" };
			key = data.id;
			parent = nullptr;
			left = nullptr;
			right = nullptr;
		}

		BSTNode(const key_t_defined k, const std::string name)
		{
			data = { k, name };
			key = data.id;
			parent = nullptr;
			left = nullptr;
			right = nullptr;
		}

	};

	class BST
	{
	public:
		BSTNode* firstNode = nullptr;

		void Insert(const key_t_defined k, const std::string name);
		void Delete(const key_t_defined k);

		BSTNode* Search(const key_t_defined k);

		void Clear();

		BSTNode* Min();
		BSTNode* Min(BSTNode* subtree_root);
		BSTNode* Max();
		BSTNode* Max(BSTNode* subtree_root);

		BSTNode* Predecesor(const key_t_defined k);
		BSTNode* Succesor(const key_t_defined k);

		std::vector<key_t_defined> DisplayKeys();
		std::vector<key_t_defined> DisplayKeys(BSTNode* subtree_root);

		void Display(BSTNode* root, std::string file_name, bool displayNames);

		void CreateFromData(std::vector<key_t_defined> keys, std::vector<std::string> names);
		void CreateFromFile(std::string dir);

		void generateDotFile(BSTNode* root, std::string file_name);
		void generateNamesDotFile(BSTNode* root, std::string file_name);

		int countNodes(BSTNode* subtree_root);
	};

}