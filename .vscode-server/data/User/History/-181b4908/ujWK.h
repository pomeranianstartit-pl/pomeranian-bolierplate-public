#pragma once
#include <vector>
#include <string>
#include <fstream>
#include <queue>


using key_t = unsigned short;
namespace AiSD
{
	struct data
	{
		key_t id;
		std::string name;
	};

	class BSTNode
	{
	public:
		data data;
		key_t key;
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

		BSTNode(const key_t k, const std::string name)
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

		void Insert(const key_t k, const std::string name);
		void Delete(const key_t k);

		BSTNode* Search(const key_t k);

		void Clear();

		BSTNode* Min();
		BSTNode* Min(BSTNode* subtree_root);
		BSTNode* Max();
		BSTNode* Max(BSTNode* subtree_root);

		BSTNode* Predecesor(const key_t k);
		BSTNode* Succesor(const key_t k);

		std::vector<key_t> DisplayKeys();
		std::vector<key_t> DisplayKeys(BSTNode* subtree_root);

		void Display(BSTNode* root, std::string file_name, bool displayNames);

		void CreateFromData(std::vector<key_t> keys, std::vector<std::string> names);
		void CreateFromFile(std::string dir);

		void generateDotFile(BSTNode* root, std::string file_name);
		void generateNamesDotFile(BSTNode* root, std::string file_name);

		int countNodes(BSTNode* subtree_root);
	};

}