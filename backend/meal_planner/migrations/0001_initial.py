# Generated by Django 4.0.1 on 2022-03-13 22:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ingredient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('unit', models.PositiveSmallIntegerField(choices=[(1, 'pices'), (2, 'pound'), (3, 'once'), (4, 'miligramme'), (5, 'gramme'), (6, 'kilogramme'), (7, 'mililiter/cc'), (8, 'liter'), (9, 'teaspoon'), (10, 'tablespoon'), (11, 'fluid once'), (12, 'cup')], default=1)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=200)),
                ('email', models.CharField(max_length=200)),
                ('password', models.CharField(max_length=200)),
                ('photo', models.ImageField(upload_to='users')),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('summary', models.CharField(max_length=600)),
                ('serves', models.IntegerField()),
                ('cooking_tempreture', models.FloatField()),
                ('cooking_time', models.IntegerField()),
                ('prep_time', models.IntegerField()),
                ('instructions', models.TextField()),
                ('photo', models.ImageField(upload_to='recipe')),
                ('creation_date', models.DateTimeField(auto_now_add=True)),
                ('difficulty', models.PositiveSmallIntegerField(choices=[(1, '1-beginner'), (2, '2-easy'), (3, '3-normal'), (4, '4-hard'), (5, '5-expert')], default=1)),
                ('ingredients', models.ManyToManyField(to='meal_planner.Ingredient')),
            ],
        ),
        migrations.CreateModel(
            name='Plan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('creation_date', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='meal_planner.user')),
            ],
        ),
        migrations.CreateModel(
            name='Meal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.PositiveSmallIntegerField(choices=[(1, 'breakfast'), (2, 'lunch'), (3, 'dinner'), (4, 'dessert/snacks')], default=1)),
                ('date', models.PositiveSmallIntegerField(choices=[(1, 'monday'), (2, 'tuesday'), (3, 'wednesday'), (4, 'thursday'), (5, 'friday'), (6, 'saturday'), (7, 'sunday')], default=1)),
                ('plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='meal_planner.plan')),
                ('recipes', models.ManyToManyField(to='meal_planner.Recipe')),
            ],
        ),
    ]
