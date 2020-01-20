import { Component } from '@angular/core';
import { Node } from './treetable/models';
import {mockTree, mockTreeTest} from './treetable/mocks/mockTree';
import { mockTreeAsArrayOfNodes } from './treetable/mocks/mockTreeAsArrayOfNodes';
import { Folder, Task, NodoTest } from './treetable/mocks/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  singleRootTree: Node<Folder> = mockTree;
  arrayOfNodesTree: Node<Task>[] = mockTreeAsArrayOfNodes;
  testing: Node<NodoTest> = mockTreeTest;
}
