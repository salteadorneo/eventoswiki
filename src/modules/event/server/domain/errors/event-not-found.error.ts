class EventNotFoundError extends Error {
  constructor(public id: string) {
    super(`Event with id ${id} not found`)
  }
}
