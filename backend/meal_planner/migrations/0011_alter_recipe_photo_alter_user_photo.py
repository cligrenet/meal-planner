# Generated by Django 4.0.1 on 2022-03-25 16:03

from django.db import migrations, models
import meal_planner.models


class Migration(migrations.Migration):

    dependencies = [
        ('meal_planner', '0010_rename_cooking_tempreture_recipe_cooking_temperature_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='photo',
            field=models.ImageField(blank=True, default='default.png', null=True, upload_to=meal_planner.models.upload_to, verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='user',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to=meal_planner.models.upload_to),
        ),
    ]