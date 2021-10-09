class PeopleDto {
  avatar: string;
  name: string;

  constructor(people: { avatar: string; name: string } | any) {
    this.avatar = people.avatar;
    this.name = people.name;
  }
}

export default PeopleDto;
