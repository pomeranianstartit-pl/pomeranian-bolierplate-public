import React, { useEffect } from 'react';

const TODO_URL = 'http://localhost:3333/api/todo';

class LocalDevApiClient {

    async fetchJson(url, options = {}) {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Błąd sieci: ${response.status}`);
        }
        return response.json();
    }

    async getToDoList() {
        return this.fetchJson(TODO_URL);
    }

    async getToDoItem(id) {
      return this.fetchJson(`${TODO_URL}/${id}`);
    }

    async saveToDoItem(id, title, note, author) {

      const data = {
        title: title, 
        note: note,
        author: author
      };

      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      return this.fetchJson(`${TODO_URL}/${id}`, options);
    }


    async addToDoItem(title, note, author) {

      const data = {
        title: title, 
        note: note,
        author: author
      };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      return this.fetchJson(TODO_URL, options);
    }    

    async markAsDone(id) {
        const options = {
            method: 'PUT'
          };
        return this.fetchJson(`${TODO_URL}/${id}/markAsDone`, options);
    }

    async remove(id) {
        const options = {
            method: 'DELETE'
          };
        return this.fetchJson(`${TODO_URL}/${id}`, options);
    }
}

export default new LocalDevApiClient();