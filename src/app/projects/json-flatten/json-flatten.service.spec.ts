import { TestBed, inject } from '@angular/core/testing';

import { JsonFlattenService } from './json-flatten.service';

describe('JsonFlattenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonFlattenService]
    });
  });

  it('should be created', inject([JsonFlattenService], (service: JsonFlattenService) => {
    expect(service).toBeTruthy();
  }));

  it('flatten should work', inject([JsonFlattenService], (service: JsonFlattenService) => {
    let expectedResult = {
      "a.b.c.d": 4,
      "r.l.m": "hey"
    };
    let input = { "a.b.c": { "d": 4 }, "r": { "l.m": "hey" } };
    let output = service.flatten(input);
    expect(output).toEqual(expectedResult);
  }));

  it('unflatten should work', inject([JsonFlattenService], (service: JsonFlattenService) => {
    let expectedResult = {
      "a": {
        "b": {
          "c": {
            "d": 4
          }
        }
      },
      "r": {
        "l": {
          "m": "hey"
        }
      }
    };
    let input = { "a.b.c.d": 4, "r": { "l.m": "hey" } };
    let output = service.unflatten(input);
    expect(output).toEqual(expectedResult);
  }));

});
