from django.shortcuts import render
from .models import ArticleSeries

# Create your views here.
def tutorials_home(request):
    matching_series = ArticleSeries.objects.all()

    return render(request=request,
                  template_name='tutorials.html',
                  context={"objects": matching_series}
                  )