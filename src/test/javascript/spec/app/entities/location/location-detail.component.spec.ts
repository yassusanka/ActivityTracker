/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { StucdentdetailsTestModule } from '../../../test.module';
import { LocationDetailComponent } from 'app/entities/location/location-detail.component';
import { Location } from 'app/shared/model/location.model';

describe('Component Tests', () => {
    describe('Location Management Detail Component', () => {
        let comp: LocationDetailComponent;
        let fixture: ComponentFixture<LocationDetailComponent>;
        const route = ({ data: of({ location: new Location(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [StucdentdetailsTestModule],
                declarations: [LocationDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(LocationDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(LocationDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.location).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
