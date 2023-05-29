export class ApiRepository<T extends { nombre: string }> {
  constructor(public url: string) {}

  async getAll(): Promise<T[]> {
    const response = await fetch(this.url);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }
    return response.json() as Promise<T[]>;
  }

  async getFiltered(nombre: T["nombre"]): Promise<T[]> {
    const response = await fetch(`this.url + continents/${nombre as string}`);
    return response.json() as Promise<T[]>;
  }
}
