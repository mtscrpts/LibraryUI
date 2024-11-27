import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent {

  category: any;
  id: any;

  form = new FormGroup({
    categoryId: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data);
      this.category = data['category'];
      this.form.get('categoryId')?.setValue(this.category.categoryId);
      this.form.get('name')?.setValue(this.category.name);
      this.form.get('description')?.setValue(this.category.description);
    });
  }

  onSubmit(): void {
    this.category = this.form.value;
    this.categoryService.updateCategory(this.category.categoryId, this.category).subscribe(json => {
      console.log(json);
      window.location.reload();
      window.alert('The changes has been saved!')
    });
  }

  onDelete(): void {
    this.categoryService.deleteCategory(this.category.categoryId).subscribe(json => {
      this.router.navigate(['/', 'categories']);
    });
  }
}
