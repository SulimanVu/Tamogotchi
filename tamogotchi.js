const tamogotchi = {
    name: 'Тузик',
    meal: 2,    //еда
    energy: 4,
    mood: 5,    //настроение
    work: 'Полная',
    hunger: function(){
        if(this.meal < 3){
            return 'Я голоден'
        }return 'Я не голоден'
    },
    statusEng: function(){
        if(this.energy < 3){
            return 'Я хочу спать'
        }return 'Я не хочу спать'
    },
    statusMood: function(){
        if(this.mood < 3){
            return 'Мне скучно'
        }return 'Мне весело'
    },
    getStatus: function(){
        if(this.name <= 0 || this.meal <= 0 || this.energy  <= 0 || this.mood <= 0 ){
            return `${tamogotchi.name} умер :(`
        }
        return(`Имя: ${this.name}, Еда: ${this.hunger()} (${this.meal}), Энергия: ${this.statusEng()} (${this.energy}), Настроение: ${this.mood} (${this.mood}), Готовность к работе: ${this.work}`)
    },
    setName: function(inputName){
       return tamogotchi.name = inputName;
    },
    eat: function(){
        if(this.meal<5){
            this.meal++
        }
        this.mood--
    },
    sleep: function(){
        if(this.energy<5){
            this.energy++
        }
        this.meal--
    },
    play: function(){
        if(this.mood<5){
            this.mood++
        }
        this.energy--
    }
  }
  
  console.log(tamogotchi.getStatus())
