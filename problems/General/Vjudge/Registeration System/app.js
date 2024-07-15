class RegistrationSystem {
  constructor() {
    this.data = new Set();
    this.counts = {};
  }

  register(name) {
    if (!this.data.has(name)) {
      this.data.add(name);
      this.counts[name] = 1;
      return "OK";
    } else {
      let newName;
      while (true) {
        newName = name + this.counts[name];
        this.counts[name]++;
        if (!this.data.has(newName)) {
          this.data.add(newName);
          this.counts[newName] = 1;
          break;
        }
      }
      return newName;
    }
  }
}






//using Hash Map

class RegistrationSystem {
  constructor() {
    this.data = new Map();
  }

  register(name) {
    if (!this.data.has(name)) {
      this.data.set(name, 0);
      return "OK";
    } else {
      let count = this.data.get(name) + 1;
      this.data.set(name, count);
      let newName = name + count;
      while (this.data.has(newName)) {
        count = this.data.get(name) + 1;
        this.data.set(name, count);
        newName = name + count;
      }
      this.data.set(newName, 0);
      return newName;
    }
  }
}

// Example usage:
const system = new RegistrationSystem();
const requests = ['abacaba', 'acaba', 'abacaba', 'acab'];

for (const request of requests) {
  console.log(system.register(request));
}
