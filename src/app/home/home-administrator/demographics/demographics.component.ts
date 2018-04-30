import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { User } from '../../../_models/user';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.css']
})
export class DemographicsComponent implements OnInit {
  gender: any[];

  race: any[];

  party: any[];

  view: any[] = [900, 300];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  loading = true;

  constructor(
    private userService: UserService
  ) {
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      (users: User[]) => {
        const races = [];
        const parties = [];
        const genders = [];

        for (const user of users) {
          races.push(user.demographics.race);
          parties.push(user.demographics.party);
          genders.push(user.demographics.gender);
        }

        console.log(races);
        console.log(parties);
        console.log(genders);

        let len = races.length;
        const whiteRace = (races.filter((r) => r === 'White').length / len) * 100;
        const blackRace = (races.filter((r) => r === 'Black').length / len) * 100;
        const asianRace = (races.filter((r) => r === 'Asian').length / len) * 100;
        const hispanicRace = (races.filter((r) => r === 'Hispanic').length / len) * 100;
        const latinoRace = (races.filter((r) => r === 'Latino').length / len) * 100;
        const nativeRace = (races.filter((r) => r === 'Native American').length / len) * 100;
        const pacificRace = (races.filter((r) => r === 'Pacific Islander').length / len) * 100;
        const otherRace = (races.filter((r) => r === 'Other').length / len) * 100;
        this.race = [
          {
            name: 'White',
            value: whiteRace
          },
          {
            name: 'Black',
            value: blackRace
          },
          {
            name: 'Asian',
            value: asianRace
          },
          {
            name: 'Hispanic',
            value: hispanicRace
          },
          {
            name: 'Latino',
            value: latinoRace
          },
          {
            name: 'Native American',
            value: nativeRace
          },
          {
            name: 'Pacific Islander',
            value: pacificRace
          },
          {
            name: 'Other',
            value: otherRace
          }
        ];

        len = parties.length;
        const republican = (parties.filter((r) => r === 'Republican').length / len) * 100;
        const democrat = (parties.filter((r) => r === 'Democrat').length / len) * 100;
        const independent = (parties.filter((r) => r === 'Independent').length / len) * 100;
        this.party = [
          {
            name: 'Democrat',
            value: democrat
          },
          {
            name: 'Republican',
            value: republican
          },
          {
            name: 'Independent',
            value: independent
          }
        ];


        len = genders.length;
        const male = (genders.filter((r) => r === 'M').length / len) * 100;
        const female = (genders.filter((r) => r === 'F').length / len) * 100;
        this.gender = [
          {
            name: 'Male',
            value: male
          },
          {
            name: 'Female',
            value: female
          }
        ];

      },
      (error) => {
        console.log(error);
      }
    );
  }

}
