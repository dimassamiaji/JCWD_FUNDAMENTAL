const object = {
    key: "value",
    method() {
      console.log("ini adalah function");
    },
    methodwThis() {
      console.log(this.key, "accessing key dalam object");
    },
  };
  
  const { method } = object;
  
  method();
  
  const copyObject = { ...object }; // shallow copy
  const deepObject = object; // deep copy
  
  deepObject.key = "diubah";
  console.log(object.key);
  console.log(copyObject.key);
  
  //class
  
  class User {
    constructor(name, age) {
      //method yang dipanggil pada saat kita membuat sebuah instance object
      this.name = name;
      this.age = age;
    }
  }
  
  const user1 = new User("user 1", 17);
  const user2 = new User("user 2", 18);
  const user3 = new User("user 3", 19);
  
  const user4 = {
    name: "user 4",
    age: 20,
  };
  
  console.log(user1, user2, user3);
  
  class Student {
    #name;
    #age;
    #kelas;
    constructor(name, age, kelas) {
      this.#name = name;
      this.#kelas = kelas;
      this.#age = age;
    }
    showData() {
      return { nama: this.#name, kelas: this.#kelas, umur: this.#age };
    }
    #validateKelas(value) {
      if (value != "JCWD" && value != "JCDS") return "kelas tidak sesuai";
    }
    editKelas(kelasBaru) {
      const validate = this.#validateKelas(kelasBaru);
      if (!validate) this.#kelas = kelasBaru;
      else console.log(validate);
    }
    get nama() {
      return this.#name;
    }
    set nama(newName) {
      if (typeof newName != "string") console.log("invalid input");
      else this.#name = newName;
    }
  }
  
  const student1 = new Student("student 1", 18, "JCWD");
  
  console.log(student1.showData());
  student1.editKelas("JCDS");
  console.log(student1.showData());
  student1.nama = 123;
  
  console.log(student1.nama);
  
  class InternationalStudent extends Student {
    constructor(name, age, kelas, passport, visa) {
      super(name, age, kelas);
      this.passport = passport;
      this.visa = visa;
    }
  
    showDataInter() {
      return {
        ...this.showData(),
        passport: this.passport,
        visa: this.visa,
      };
    }
  }
  
  const interStudent1 = new InternationalStudent(
    "inter1",
    21,
    "JCWD",
    "12345",
    "3 years"
  );
  
  console.log(interStudent1.showDataInter());
  console.log(interStudent1.nama);
  interStudent1.editKelas("JCUIUX");
  
  class StaticClass {
    static static = "";
    static sayHello() {
      console.log("hello");
    }
  }
  
  const static = new StaticClass();
  StaticClass.sayHello();
  
  const arr = new Array(1, 2, 3, 4);