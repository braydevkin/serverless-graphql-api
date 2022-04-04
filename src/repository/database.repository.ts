export interface DatabaseRepository<Entity> {
  create: (data: Entity) => Promise<Entity>;
}
