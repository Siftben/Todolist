class Project{
  
}

class Note {
  constructor(title, description, dueDate, priority, done) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.done = done;
  }

  getNote() {
    return this.title;
  }

  getDesc(){
    return this.description;
  }

}

export {
  Project,
  Note
};