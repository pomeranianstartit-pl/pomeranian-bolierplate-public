import React, { useEffect } from 'react';

class LocalDevApiClient {

    TODO_URL = 'http://localhost:3333/api/todo';

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

    async markAsDone(id) {
        const options = {
            method: 'PUT'
          };
        return this.fetchJson(`${TODO_URL}/${id}/markAsDone`);
    }

    async remove(id) {
        const options = {
            method: 'DELETE'
          };
        return this.fetchJson(`${TODO_URL}/${id}`, options);
    }
}