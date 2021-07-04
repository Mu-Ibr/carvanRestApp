import { Injectable } from '@angular/core';
import { WaiterMenuItem } from './WaiterMenuItem.model';
import { Order } from './Order.model';

@Injectable({
  providedIn: 'root'
})
export class WaiterMenuService {

  private _appetizers: WaiterMenuItem[]=[
    {
      name:'חומוס',
      price:20,
      id:1
    },
    {
      name:'טחינה',
      price: 20,
      id:2
    },
    {
      name:'חומוס עם טחינה',
      price: 20,
      id:3
    },
    {
      name:'חצילים עם טחינה',
      price: 20,
      id:4
    },
    {
      name:'חצילים מטוגנים',
      price: 20,
      id:5
    },
    {
      name:'סלט ירקות',
      price: 20,
      id:6
    },
    {
      name:'סלט ירות עם טחינה',
      price: 20,
      id:7
    },
    {
      name:'סלט טורקי',
      price: 20,
      id:8
    },
    {
      name:'סלט מטבוחה',
      price: 20,
      id:9
    },
    {
      name:'סלט תבולה',
      price: 20,
      id:10
    },
    {
      name:'דלעת',
      price: 20,
      id:11
    },
    {
      name:'לבנה',
      price: 20,
      id:12
    },
    {
      name:'קובה',
      price: 20,
      id:13
    },
    {
      name:'פלאפל',
      price: 20,
      id:14
    },
    {
      name:'מגש סלטים',
      price: 100,
      id:15
    },
    {
      name:'חצי מגש סלטים',
      price: 50,
      id:16
    }
  ]

  private _soupd: WaiterMenuItem[]=[
    {
      name:'מרק ירקות',
      price:25,
      id:17
    },
    {
      name:'מרק שעועית',
      price: 25,
      id:18
    },
    {
      name:'מרק עדשים',
      price: 25,
      id:19
    },
    {
      name:'מרק בשר',
      price: 25,
      id:20
    }
  ]

  private _stuffed: WaiterMenuItem[]=[
    {
      name:'עלי גפן',
      price:25,
      id:21
    },
    {
      name:'קישוא',
      price: 25,
      id:22
    },
    {
      name:'חציל',
      price: 25,
      id:23
    },
    {
      name:'פלפל',
      price: 25,
      id:24
    }
  ]

  private _mainMeal: WaiterMenuItem[]=[
    {
      name:'מקלובה',
      price:85,
      id:25
    },
    {
      name:'סיניה',
      price: 75,
      id:26
    },
    {
      name:'שישליק עגל',
      price: 80,
      id:27
    },
    {
      name:'שישליק כבש',
      price: 80,
      id:28
    },
    {
      name:'שישליק פרגית',
      price: 55,
      id:29
    },
    {
      name:'קבאב',
      price: 55,
      id:30
    },
    {
      name:'מעורב',
      price: 70,
      id:31
    },
    {
      name:'מיקס גריל',
      price: 95,
      id:32
    },
    {
      name:'סטייקה פילה',
      price: 130,
      id:33
    },
    {
      name:'חזה עוף',
      price: 55,
      id:34
    },
    {
      name:'שניצל',
      price: 55,
      id:35
    },
    {
      name:'כבד',
      price: 50,
      id:36
    },
    {
      name:'צלעות כבש',
      price: 120,
      id:37
    },
    {
      name:'כבש בתנור',
      price: 130,
      id:38
    },
    {
      name:'חומוס עם בשר',
      price: 40,
      id:39
    },
    {
      name:'בורי',
      price: 75,
      id:40
    },
    {
      name:'דניס',
      price: 85,
      id:41
    },
    {
      name:'לברק',
      price: 85,
      id:42
    }
  ]
  
  private _drinks: WaiterMenuItem[]=[
    {
      name:'קוקה-קולה',
      price: 10,
      id:42
    },
    {
      name:'מי עדן',
      price: 10,
      id:43
    },
    {
      name:'נסתי',
      price: 10,
      id:44
    },
    {
      name:'קוקה-קולה דיטא',
      price: 10,
      id:45
    },
    {
      name:'ספרייט',
      price: 10,
      id:46
    },
    {
      name:'ספרייט דיטא',
      price: 10,
      id:47
    },
    {
      name:'פאנטה',
      price: 10,
      id:48
    },
    {
      name:'פריגת',
      price: 10,
      id:49
    },
    {
      name:'סיידר',
      price: 10,
      id:50
    },
    {
      name:'אאוט סיידר',
      price: 10,
      id:51
    },
    {
      name:'בירה קלסברג',
      price: 16,
      id:52
    },
    {
      name:'בירה טובורג',
      price: 16,
      id:53
    },
    {
      name:'בירה מכבי',
      price: 16,
      id:54
    },
    {
      name:'בירה גולדסטאר',
      price: 16,
      id:55
    },
    {
      name:'ערק',
      price: 20,
      id:56
    },
    {
      name:'וודקה',
      price: 45,
      id:57
    },
    {
      name:'ויסקי',
      price: 45,
      id:58
    },
    {
      name:'יין לבן גדול',
      price: 100,
      id:59
    },
    {
      name:'יין לבן קטן',
      price: 50,
      id:60
    },
    {
      name:'יין אדום גדול',
      price: 100,
      id:61
    },
    {
      name:'יין אדום קטן',
      price: 50,
      id:62
    }
    
  ]
  
  private _desserts: WaiterMenuItem[]=[
    {
      name:'קרם בווריה',
      price: 20,
      id:63
    },
    {
      name:'מוס שוקולד',
      price: 20,
      id:64
    },
    {
      name:'בקלוואה',
      price: 45,
      id:65
    },
    {
      name:'קפה טורקי',
      price: 10,
      id:66
    },
    {
      name:'תה נענע',
      price: 10,
      id:67
    }
  ]

  constructor() {}

  get Appetizers(){
    return [...this._appetizers];
  }
  get Soups(){
    return [...this._soupd];
  }
  get Stuffed(){
    return [...this._stuffed];
  }
  get MainMeal(){
    return [...this._mainMeal];
  }
  get Drinks(){
    return [...this._drinks];
  }
  get Desserts(){
    return [...this._desserts];
  }
}
