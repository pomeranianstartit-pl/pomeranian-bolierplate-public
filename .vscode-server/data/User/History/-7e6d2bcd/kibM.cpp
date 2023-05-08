#include "BST.h"
//using key_t = unsigned short;

void AiSD::BST::generateDotFile(BSTNode* root, std::string file_name){
	std::ofstream file;
	file.open(file_name + ".dot");
	file << "digraph {\n";
	std::queue<BSTNode*> q;
	q.push(root);
	while (!q.empty()) {
		BSTNode* current = q.front();
		q.pop();
		if (current->left != NULL) {
			file << current->key << " -> " << current->left->key << ";\n";
			q.push(current->left);
		}
		if (current->right != NULL) {
			file << current->key << " -> " << current->right->key << ";\n";
			q.push(current->right);
		}
	}
	file << "}";
	file.close();
}

void AiSD::BST::generateNamesDotFile(BSTNode* root, std::string file_name) {
	std::ofstream file;
	file.open(file_name + ".dot");
	file << "digraph {\n";
	std::queue<BSTNode*> q;
	q.push(root);
	while (!q.empty()) {
		BSTNode* current = q.front();
		q.pop();
		if (current->left != NULL) {
			file << current->data1.name << " -> " << current->left->data1.name << ";\n";
			q.push(current->left);
		}
		if (current->right != NULL) {
			file << current->data1.name << " -> " << current->right->data1.name << ";\n";
			q.push(current->right);
		}
	}
	file << "}";
	file.close();
}

std::vector<key_t> AiSD::BST::DisplayKeys()
{
	std::vector<key_t> keys;
	BSTNode* min = Min();
	keys.push_back(min->key);
	key_t max = Max()->key;
	while (min->key < max)
	{
		min = Succesor(min->key);
		keys.push_back(min->key);
	}

	return keys;
}

std::vector<key_t> AiSD::BST::DisplayKeys(BSTNode* subtree_root)
{
	std::vector<key_t> keys;
	BSTNode* min = Min(subtree_root);
	keys.push_back(min->key);
	key_t max = Max(subtree_root)->key;
	while (min->key < max)
	{
		min = Succesor(min->key);
		keys.push_back(min->key);
	}

	return keys;
}

void AiSD::BST::Display(BSTNode* root, std::string file_name, bool displayNames)
{
	if (displayNames)
	{
		generateNamesDotFile(root, file_name);
	}
	else
	{
		generateDotFile(root, file_name);
	}
	std::string dotFileName = file_name + ".dot";
	std::string pngFileName = file_name + ".png";
	std::string command = "dot -Tpng " + dotFileName + " -o " + pngFileName;
	system(command.c_str());
}

void AiSD::BST::CreateFromData(std::vector<key_t> keys, std::vector<std::string> names)
{
	for (size_t i = 0; i < keys.size(); i++)
	{
		Insert(keys[i], names[i]);
	}

}

void AiSD::BST::CreateFromFile(std::string dir)
{
	std::vector<key_t> keys;
	key_t key;
	std::string name;
	std::vector<std::string> names;

	std::fstream data_file;
	data_file.open(dir);

	while (data_file >> key >> name)
	{
		keys.push_back(key);
		names.push_back(name);
	}
	data_file.close();

	CreateFromData(keys, names);

}

void AiSD::BST::Insert(const key_t k, const std::string name)
{
	BSTNode* node = new BSTNode(k, name);
	node->key = k;
	BSTNode* tmp = firstNode;
	BSTNode* prev = tmp;

	while (tmp)
	{
		prev = tmp;
		if (node->key < tmp->key)
		{
			tmp = tmp->left;
		}
		else
		{
			tmp = tmp->right;
		}
	}

	node->parent = prev;

	if (!firstNode)
	{
		firstNode = node;
	}
	else
	{
		if (node->key < prev->key)
		{
			prev->left = node;
		}
		else
		{
			prev->right = node;
		}
	}

}

AiSD::BSTNode* AiSD::BST::Search(const key_t k)
{
	BSTNode* tmp = firstNode;
	while (tmp && k != tmp->key)
	{
		if (k < tmp->key)
		{
			tmp = tmp->left;
		}
		else
		{
			tmp = tmp->right;
		}
	}
	if (!tmp)
	{
		return nullptr;
	}
	return tmp;
}

AiSD::BSTNode* AiSD::BST::Min(BSTNode* subtree_root)
{
	BSTNode* tmp = subtree_root;
	while (tmp->left)
	{
		tmp = tmp->left;
	}

	return tmp;
}

AiSD::BSTNode* AiSD::BST::Min()
{
	BSTNode* tmp = firstNode;
	while (tmp->left)
	{
		tmp = tmp->left;
	}

	return tmp;
}

AiSD::BSTNode* AiSD::BST::Max()
{
	BSTNode* tmp = firstNode;
	while (tmp->right)
	{
		tmp = tmp->right;
	}

	return tmp;
}

AiSD::BSTNode* AiSD::BST::Max(BSTNode* subtree_root)
{
	BSTNode* tmp = subtree_root;
	while (tmp->right)
	{
		tmp = tmp->right;
	}

	return tmp;
}

AiSD::BSTNode* AiSD::BST::Succesor(const key_t k)
{
	BSTNode* tmp = Search(k);
	if (tmp->right)
	{
		return Min(tmp->right);
	}
	BSTNode* par = tmp->parent;
	while (par && tmp == par->right)
	{
		tmp = par;
		par = par->parent;
	}

	return par;
}

int AiSD::BST::countNodes(BSTNode* subtree_root)
{
	std::vector<key_t> keys = DisplayKeys(subtree_root);
	return keys.size();
}